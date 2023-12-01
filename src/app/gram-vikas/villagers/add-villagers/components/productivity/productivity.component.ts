import { Component } from '@angular/core';

@Component({
  selector: 'app-productivity',
  templateUrl: './productivity.component.html',
  styleUrls: ['./productivity.component.css']
})
export class ProductivityComponent {


// show or hide the Productivity  FarmData
  showformDataYes: boolean = false;
  showformDataNo: boolean = false;
  
  //  show Productivity Form Data
   formDataVisibilityYes() {
      this.showformDataYes = !this.showformDataYes;
      this.showformDataNo = false;
      this.activeButton;    //currently activeButton
    }
  //  hide Productivity Form Data
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
