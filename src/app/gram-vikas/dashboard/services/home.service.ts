import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { counts } from '../models/exampledashboardmodel';
import { zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  village = environment.dashboard
  constructor(private _http: HttpClient) { }
  get_villages_count() {
    return this._http.get(this.village + '/villages')
  }
  get_families_count() {
    return this._http.get(this.village + '/families')
  }


}

