import { Component } from '@angular/core';

@Component({
  selector: 'app-farming',
  templateUrl: './farming.component.html',
  styleUrls: ['./farming.component.css']
})
export class FarmingComponent {


showFormData:boolean = false;


 
formDataVisibility() {
  this.showFormData = !this.showFormData;
}


}
