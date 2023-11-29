import { Component } from '@angular/core';

@Component({
  selector: 'app-farming',
  templateUrl: './farming.component.html',
  styleUrls: ['./farming.component.css']
})
export class FarmingComponent {

// show or hide the farming  FarmData
showformDataYes: boolean = false;
showformDataNo: boolean = false;

//  showFarming Form Data
 formDataVisibilityYes() {
    this.showformDataYes = !this.showformDataYes;
    this.showformDataNo = false;
    this.activeButton;    //currently activeButton
  }
//  hideFarming Form Data
  formDataVisibilityNo() {
    this.showformDataNo = !this.showformDataNo;
    this.showformDataYes = false;
    this.activeButton;    //currently activeButton
  }

// Active Buttons
activeButton: number = 0;

// Set the activeButton property to the provided buttonNumber value

setActiveButton(buttonNumber: number) {
  this.activeButton = buttonNumber;
}


}
