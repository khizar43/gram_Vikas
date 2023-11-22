import { Component, OnInit } from '@angular/core';
import { VillageService } from '../../services/village.service';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {

  data: any
  villages: any;
  constructor(private _ser: VillageService) { }
  get_villages() {
    this._ser.getVillage().subscribe((res) => {
      this.data = res
      console.log("Villages ======>>", this.data)
    })
  }

  ngOnInit(): void {
    this.get_villages()
  }

}