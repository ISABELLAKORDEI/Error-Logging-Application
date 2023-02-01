import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/auth/auth.service';
import { Log, Filter, convertApiLog } from 'src/utils/models';
import { LogsService } from '../dashboard/logs.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  dataSource: MatTableDataSource<Log>;
  getDataError: boolean = false;
  errorMessage: any;
  displayedColumns = ['_id', 'typeOfLog', 'microservice', 'status', 'developer.name', 'message', 'actions'];
  statuses: string[] = ['All', 'In Progress', 'Solved'];
  opSys: string[] = ['All', 'Android', 'iOS'];
  mcrServ: string[] = ['All', 'Categories MNGT', 'Inventory', 'M-PESA', 'Products SYS'];
  types: string[] = ['All', 'Error', 'Fatal'];
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
    
    this.getAllDevLogs();
  }

  getAllDevLogs() {
    this.logsServ.getDevLogs().subscribe({
      next: (response) => {
        response.body['data'].forEach((element: any) => {
          this.dataSource.data.push(convertApiLog(element));
        });
        console.log(this.dataSource)
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
        this.errorMessage = "Error retrieving your Logs! Please check your internet connection or try again later.";
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
      this.logsServ.updateLog(this.viewLog._id, "Solved").subscribe({
        next: (response) => {
          this._snackBar.open('Issue Resolved!', 'Go to All Logs to take up more logs', {
            duration: 2 * 1000,
          });
          setTimeout(() => {
            this.refreshPage()
          }, 2000);
        },
        error: (error: HttpErrorResponse) => {
          this.errorMessage = "Error closing log issue! Please check your internet connection or try again later.";
          this.getDataError = true;
          throw error;
        }
      });
    }

  unassignLog() {
    this.logsServ.unassignLog(this.viewLog._id, "New").subscribe({
      next: (response) => {
        this._snackBar.open('Log has been unassigned', 'Go to All Logs to take up more logs', {
          duration: 2 * 1000,
        });
        setTimeout(() => {
          this.refreshPage()
        }, 2000);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = "Error unassigning log! Please check your internet connection or try again later.";
        this.getDataError = true;
        throw error;
      }
    });
  }

  closeViewModal() {
    document.getElementById("viewLogModal")!.classList.toggle('show');
  }

  // ------ utility functions -----------

  refreshPage() {
    this.getAllDevLogs();
    window.location.reload();
  }

  applyCltFilter(ob: MatSelectChange, cltfilter: Filter) {
    this.filterDictionary.set(cltfilter.name, ob!.value);
    var jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));
    this.dataSource.filter = jsonString;
  }

}
