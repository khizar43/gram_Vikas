

/*
Name: full Name
Date: DD/MM/YYYY
What: This is the controller ts file to add a client in the admin module. Super Admin has the option to add a client
Why: This is provided to super admin as sometimes they might have to onboard a client who is not willing to onboard themselves on the portal and share credentials
 */

//1. Imports - Angular Framework - Mandatory
import { Component, OnInit } from '@angular/core';


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
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
//10. Module Variables - Optional


//11. Module Methods - Optional


//12. Class - Mandatory

export class AgentProfileComponent implements OnInit {
  
  current: any;
  max: number = 100;
  stroke: number = 15;
  radius: number = 125;
  semicircle: boolean = true;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = '#00A2E0';
  background: string = '#ffffff';            //'#eaeaea';
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: Array<string> = [
    'linearEase',
    'easeInQuad',
    'easeOutQuad',
    'easeInOutQuad',
    'easeInCubic',
    'easeOutCubic',
    'easeInOutCubic',
    'easeInQuart',
    'easeOutQuart',
    'easeInOutQuart',
    'easeInQuint',
    'easeOutQuint',
    'easeInOutQuint',
    'easeInSine',
    'easeOutSine',
    'easeInOutSine',
    'easeInExpo',
    'easeOutExpo',
    'easeInOutExpo',
    'easeInCirc',
    'easeOutCirc',
    'easeInOutCirc',
    'easeInElastic',
    'easeOutElastic',
    'easeInOutElastic',
    'easeInBack',
    'easeOutBack',
    'easeInOutBack',
    'easeInBounce',
    'easeOutBounce',
    'easeInOutBounce',
  ];
//13. Properties - Mandatory


//14. Constructor - Mandatory
  constructor() { }
 //15. On Init - Mandatory
  ngOnInit(): void {
  }

}


 //16. Functional Method 





