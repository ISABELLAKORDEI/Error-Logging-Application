import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/auth/auth.service';
import { Log, Filter } from 'src/utils/models';
import { LogsService } from './logs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('paginator') paginator!: MatPaginator;
  dataSource: MatTableDataSource<Log>;
  getDataError: boolean = false;
  errorMessage: any;
  displayedColumns = ['_id', 'typeOfLog', 'microservice', 'screen', 'os', 'status', 'developer', 'message', 'actions'];
  statuses: string[] = ['All', 'New', 'In Progress', 'Done'];
  opSys: string[] = ['All', 'Android', 'iOS'];
  mcrServ: string[] = ['All', 'Categories MNGT', 'Inventory', 'M-PESA', 'Products SYS'];
  types: string[] = ['All', 'Info', 'Debug', 'Error', 'Fatal'];
  cltFilters: Filter[] = [];
  filterDictionary = new Map<string, string>();
  viewLog: Log = {
    _id: 0,
    typeOfLog: '',
    microservice: '',
    message: '',
    screen: '',
    os: '',
    status: '',
    developer: ''
  };

  constructor(private fb: FormBuilder, private http: HttpClient, private _snackBar: MatSnackBar,
    private authService: AuthService,
    private logsServ: LogsService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.cltFilters.push({ placeholder: 'Log Status', name: 'status', options: this.statuses, defaultValue: 'All' });
    this.cltFilters.push({ placeholder: 'Log Type', name: 'typeOfLog', options: this.types, defaultValue: 'All' });
    this.cltFilters.push({ placeholder: 'Operating System', name: 'os', options: this.opSys, defaultValue: 'All' });
    this.cltFilters.push({ placeholder: 'Microservice', name: 'microservice', options: this.mcrServ, defaultValue: 'All' });
    
    this.getAllLogs();
  }

  getAllLogs() {
    this.logsServ.getAllLogs().subscribe({
      next: (response) => {
        this.dataSource.data = response.body['data'];
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = function (record, filter) {
          var map = new Map(JSON.parse(filter));
          let isMatch = false;
          for (let [key, value] of map) {
            isMatch = (value == "All") || (record[key as keyof Log] == value);
            if (!isMatch) return false;
          }
          return isMatch;
        }
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = "Error retrieving Logs! Please check your internet connection or try again later.";
        this.getDataError = true;
        throw error;
      }
    });
  }

  openViewModal(viewLog: Log) {
    this.viewLog = viewLog;
    document.getElementById("viewLogModal")!.classList.toggle('show');
  }

  markAsDone() {

  }

  assignToDev() {

  }

  closeViewModal() {
    document.getElementById("viewLogModal")!.classList.toggle('show');
  }

  // ------ utility functions -----------

  refreshPage() {
    this.getAllLogs();
    window.location.reload();
  }

  applyCltFilter(ob: MatSelectChange, cltfilter: Filter) {
    this.filterDictionary.set(cltfilter.name, ob!.value);
    var jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));
    this.dataSource.filter = jsonString;
  }

  searchClient(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
