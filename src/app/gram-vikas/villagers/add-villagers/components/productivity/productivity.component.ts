import { Component } from '@angular/core';

@Component({
  selector: 'app-productivity',
  templateUrl: './productivity.component.html',
  styleUrls: ['./productivity.component.css']
})
export class ProductivityComponent {


showformData: boolean = false;

//  Farming Form Data
 formDataVisibility() {
    this.showformData = !this.showformData;
  }



}
