import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VillageService {

  village = environment.dashboard
  constructor(private _http: HttpClient) { }
  getVillage() {
    return this._http.get(this.village + '/villages')
  }
}
