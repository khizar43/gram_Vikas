import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any
  constructor(private _ser: HomeService) { }
  get_villages() {
    this._ser.get_villages_count().subscribe((res) => {
      this.data = res
      console.log("Villages ======>>", this.data)
    })
  }

  ngOnInit(): void {
    this.get_villages()
  }

}
