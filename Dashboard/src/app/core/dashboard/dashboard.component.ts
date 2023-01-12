import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // @ViewChild('paginator') paginator!: MatPaginator;
  // dataSource: MatTableDataSource<Client>;
  // filterDs: MatTableDataSource<Client>;
  // getDataError: boolean = false;
  // errorMessage: any;
  // displayedColumns = ['id', 'client_name', 'mpesa_no', 'type', 'location', 'paid_until', 'pay_status', 'actions'];
  // filterDsCols = ['client_name', 'mpesa_no', 'type', 'no_of_units', 'location', 'total_payable', 'pay_status', ];
  // formValues: any;
  // isPrint: boolean = false;
  // isEdit: boolean = false;
  // susId!: number;
  // susName!: string;
  // activeId!: number;
  // activeName!: string;
  // deletePrompt: boolean = false;
  // isPageError: boolean = false;
  // pageError: any;
  // isFormError: boolean = false;
  // formError: any;
  // susReasonForm = this.fb.group({
  //   sus_reason: ['Overdue Payment', Validators.required],
  //   other: [null]
  // });
  // closeFormEmitter!: Subscription;
  // showOtherTxt: boolean = false;
  // susReason!: string;

  // clientStats: any = {
  //   statusChart: {},
  //   growthChart: {},
  //   payStatusChart: {},
  //   totalDebt: 0,
  // };
  // pay_statuses: string[] = ['All', 'On Track', 'Overdue'];
  // types: string[] = ['All', 'Resident', 'Rental', 'Corporate'];
  // locations: string[] = locations;

  // cltFilters: Filter[] = [];
  // filterDictionary = new Map<string, string>();

  // constructor(private fb: FormBuilder, private http: HttpClient, private _snackBar: MatSnackBar,
  //   private clientServ: ClientsService) {
  //   this.dataSource = new MatTableDataSource();
  //   this.filterDs = new MatTableDataSource();
  // }

  // ngOnInit(): void {
  //   this.cltFilters.push({ placeholder: 'Pay Status', name: 'pay_status', options: this.pay_statuses, defaultValue: 'All'});
  //   this.cltFilters.push({ placeholder: 'Client Type', name: 'type', options: this.types, defaultValue: 'All'});
  //   this.cltFilters.push({ placeholder: 'Location', name: 'location', options: this.locations, defaultValue: 'All'});

  //   this.getClients();
  //   this.getFilterTable();
  //   this.getClientStats();

  //   this.closeFormEmitter = this.clientServ.getCloseClientForm().subscribe(() => {
  //     this.refreshPage();
  //     this.closeAddModal();
  //   });

  //   this.setOtherTxt();
  // }

  // getClients() {
  //   this.http.get<any>(allClientsUrl, { observe: 'response' }).subscribe({
  //     next: (response) => {
  //       this.dataSource.data = response.body;
  //       this.dataSource.paginator = this.paginator;
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       this.errorMessage = "Error retrieving Clients! Please check your internet connection or try again later.";
  //       this.getDataError = true;
  //       throw error;
  //     }
  //   });
  // }

  // getFilterTable() {
  //   this.http.get<any>(allClientsUrl, { observe: 'response' }).subscribe({
  //     next: (response) => {
  //       this.filterDs.data = response.body;
  //       this.filterDs.filterPredicate = function (record, filter) {
  //         var map = new Map(JSON.parse(filter));
  //         let isMatch = false;
  //         for (let [key, value] of map) {
  //           isMatch = (value == "All") || (record[key as keyof Client] == value);
  //           if (!isMatch) return false;
  //         }
  //         return isMatch;
  //       }
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       this.errorMessage = "Error retrieving Clients! Please check your internet connection or try again later.";
  //       this.getDataError = true;
  //       throw error;
  //     }
  //   });
  // }

  // getClientStats() {
  //   this.clientServ.getClientStats().subscribe({
  //     next: (response) => {
  //       this.clientStats = {
  //         growthChart: {
  //           animationEnabled: true,
  //           axisY: {
  //             title: "New Clients"
  //           },
  //           data: [{
  //             type: "column",
  //             showInLegend: true,
  //             legendMarkerColor: "grey",
  //             legendText: "Months",
  //             dataPoints: response.body['client_growth']
  //           }]
  //         },
  //         statusChart: {
  //           animationEnabled: true,
  //           legend: {
  //             cursor: "pointer",
  //           },
  //           data: [{
  //             type: "pie",
  //             showInLegend: true,
  //             toolTipContent: "{name}: <strong>{val}</strong>",
  //             indexLabel: "{name} - {y}%",
  //             dataPoints: response.body['client_status']
  //           }]
  //         },
  //         payStatusChart: {
  //           animationEnabled: true,
  //           legend: {
  //             cursor: "pointer",
  //           },
  //           data: [{
  //             type: "pie",
  //             showInLegend: true,
  //             toolTipContent: "{name}: <strong>{val}</strong>",
  //             indexLabel: "{name} - {y}%",
  //             dataPoints: response.body['pay_status']
  //           }]
  //         },
  //         total_debt: response.body['total_debt']
  //       }
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       this.errorMessage = "Error retrieving Client Status! Please check your internet connection or try again later.";
  //       this.getDataError = true;
  //       throw error;
  //     }
  //   });
  // }

  // openAddModal() {
  //   this.formValues = null;
  //   this.isEdit = false;
  //   document.getElementById("modalcontainer")!.classList.toggle('show');
  // }

  // openEditModal(clientid: number) {
  //   this.clientServ.getClient(clientid).subscribe({
  //     next: (response) => {
  //       this.isEdit = true;
  //       this.formValues = response.body;
  //       document.getElementById("modalcontainer")!.classList.toggle('show');
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       this.pageError = 'Update Failed! Please check your internet connection or try again later';
  //       this.isPageError = true;
  //       throw error;
  //     }
  //   });
  // }

  // closeAddModal() {
  //   document.getElementById("modalcontainer")!.classList.toggle('show');
  // }

  // // Client Suspend and Terminate Functions

  // openSusModal(clientid: number, name: string) {
  //   this.susId = clientid;
  //   this.susName = name;
  //   document.getElementById("susCont")!.classList.toggle('show');
  // }

  // suspendClient() {
  //   if (this.showOtherTxt) {
  //     this.susReason = this.susReasonForm.get('other')!.value;
  //   } else {
  //     this.susReason = this.susReasonForm.get('sus_reason')!.value;
  //   }
  //   var body = { id: this.susId, status: 'Suspended', sus_reason: this.susReason, sus_date: moment().format('YYYY-MM-DD') };
  //   this.clientServ.updateClient(body).subscribe({
  //     next: (response) => {
  //       this._snackBar.open('Client ' + this.susName + ' suspended successfully!', '', {
  //         duration: 2 * 1000,
  //       });
  //       setTimeout(() => {
  //         this.refreshPage();
  //         this.closeSusModal();
  //       }, 2000);
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       this.formError = 'Suspension Failed! Please check your internet connection or try again later';
  //       this.isFormError = true;
  //       throw error;
  //     }
  //   });
  // }

  // showPrompt() {
  //   this.deletePrompt = true;
  // }

  // terminateClient() {
  //   this.clientServ.deleteClient(this.susId).subscribe({
  //     next: (response) => {
  //       this._snackBar.open('Client contract for ' + this.susName + ' terminated successfully!', '', {
  //         duration: 2 * 1000,
  //       });
  //       setTimeout(() => {
  //         this.refreshPage();
  //         this.closeSusModal();
  //       }, 2000);
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       this.formError = 'Termination Failed! Please check your internet connection or try again later';
  //       this.isFormError = true;
  //       throw error;
  //     }
  //   });
  // }

  // closeSusModal() {
  //   document.getElementById("susCont")!.classList.toggle('show');
  // }

  // openActModal(clientid: number, name: string) {
  //   this.activeId = clientid;
  //   this.activeName = name;
  //   document.getElementById("actCont")!.classList.toggle('show');
  // }

  // activateClient() {
  //   this.clientServ.activateClient(this.activeId).subscribe({
  //     next: (response) => {
  //       this._snackBar.open('Client ' + this.activeName + ' activated successfully!', '', {
  //         duration: 2 * 1000,
  //       });
  //       setTimeout(() => {
  //         this.refreshPage();
  //         this.closeActModal();
  //       }, 2000);
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       this.formError = 'Activation Failed! Please check your internet connection or try again later';
  //       this.isFormError = true;
  //       throw error;
  //     }
  //   });
  // }

  // setOtherTxt() {
  //   this.susReasonForm.get('sus_reason')!.valueChanges.subscribe(val => {
  //     if (val == 'Other') {
  //       this.showOtherTxt = true;
  //     } else {
  //       this.showOtherTxt = false;
  //     }
  //   });
  // }

  // closeActModal() {
  //   document.getElementById("actCont")!.classList.toggle('show');
  // }

  // refreshPage() {
  //   this.getClients();
  //   this.getClientStats();
  //   window.location.reload();
  // }

  // // -------------- Table Filter functions

  // openFilterTable(print: Boolean) {
  //   if(print){
  //     this.isPrint = true;
  //   }else{
  //     this.isPrint = false;
  //   }
  //   document.getElementById("filterTableCont")!.classList.toggle('show');
  // }

  // closeFilterModal() {
  //   document.getElementById("filterTableCont")!.classList.toggle('show');
  // }

  // applyCltFilter(ob: MatSelectChange, cltfilter: Filter) {
  //   this.filterDictionary.set(cltfilter.name, ob!.value);
  //   var jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));
  //   this.filterDs.filter = jsonString;
  // }

  // searchClient(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  // downloadTemplate() {
  //   var today = moment().format('h:mma -DD-MM-YYYY');
  //   var docName = 'Paiva_Client_List' + '_' + today;
  //   var data = document.getElementById('contentToConvert');
  //   html2canvas(data!).then(canvas => {

  //     var imgWidth = 440;
  //     var pageHeight = 700;
  //     var imgHeight = canvas.height * imgWidth / canvas.width;
  //     var heightLeft = imgHeight;
  //     var position = 0;

  //     const contentDataUrl = canvas.toDataURL('image/png')
  //     let pdf = new jsPDF('p', 'px', 'a4');

  //     pdf.addImage(contentDataUrl, 'PNG', 0, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;

  //     while (heightLeft >= 0) {
  //       position = heightLeft - imgHeight;
  //       pdf.addPage();
  //       pdf.addImage(contentDataUrl, 'PNG', 0, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight;
  //     }

  //     pdf.save(docName);
  //   });
  // }

}
