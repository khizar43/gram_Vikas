/*
Name: full Name
Date: DD/MM/YYYY
What: This is the controller ts file to add a client in the admin module. Super Admin has the option to add a client
Why: This is provided to super admin as sometimes they might have to onboard a client who is not willing to onboard themselves on the portal and share credentials
 */

//1. Imports - Angular Framework - Mandatory
import { Component, OnInit } from '@angular/core';
import { DashboardSummaryService } from '../../services/dashboard-summary.service';


//2. Imports - Gram Vikas Modules - Opti


//3. Imports - Gram Vikas Services - Mandatory


//4. Imports -  Gram Vikas Models - Mandatory


//5. Imports - Exception Classes - Optional


//6. Imports - Config Files - Optional

//7. Imports - Utilities - Optional


//8. Imports - Others (External Integrations, APIs, Services) - Optional


/**
 * Interface representing the structure of an account handler object.
 * This interface defines properties related to AWS ID, email ID, mobile number,
 * account type, and account status.
 */


//9. Template - Mandatory
@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.css']
})


//10. Module Variables - Optional


//11. Module Methods - Optional


//12. Class - Mandatory


export class DashboardSummaryComponent implements OnInit {

  //13. Properties - Mandatory


  //14. Constructor - Mandatory
  constructor(private _dashboard_ser: DashboardSummaryService) { }
  data_count: any
  get_count() {
    // Subscribe to the observable returned by the get_villages_count() method
    this._dashboard_ser.get_count().subscribe((res) => {
      // Store the response data in the data_villages variable
      this.data_count = res;
      // Log the value of data_villages to the console
      console.log("Count ======>>", this.data_count);
    });
  }


  //15. On Init - Mandatory
  ngOnInit(): void {
    this.get_count()
  }

  //16. Functional Method

}





