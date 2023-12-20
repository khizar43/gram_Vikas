import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VillageService {
  // get_villages_count() {
  //   throw new Error('Method not implemented.');
  // }

  village = environment.dashboard
  constructor(private _http: HttpClient) { }
  get_villages_count() {
    return this._http.get(this.village + '/villages')
  }
  get_families_count() {
    return this._http.get(this.village + '/families')
  }

}
