import { Component } from '@angular/core';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.css']
})
export class FamilyDetailsComponent {

  // show or hide the own business  
  show: boolean = false;
  hide: boolean = false;
  
  //  show  own business  
   OwnbusinessDataYes() {
      this.show = !this.show;
      this.hide = false;
      this.activeButton;    //currently activeButton
    }
  //  hide  own business  
  OwnbusinessDataNo() {
      this.hide = !this.hide;
      this.show = false;
      this.activeButton;    //currently activeButton
    }
  
  // Active Buttons
  activeButton: number = 0;
  
  // Set the activeButton property to the provided buttonNumber value

  setActiveButton(buttonNumber: number) {
    this.activeButton = buttonNumber;
  }

}


