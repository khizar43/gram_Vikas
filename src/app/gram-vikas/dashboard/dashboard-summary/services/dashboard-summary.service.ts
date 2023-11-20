import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardSummaryService {
  data_count = environment.dashboard
  constructor(private _http: HttpClient) { }
  get_counts_service() {
    return this._http.get(this.data_count + '/count')
  }
}
