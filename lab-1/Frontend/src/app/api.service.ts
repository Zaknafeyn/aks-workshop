import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {environment } from '../environments/environment';

import {WeatherForecast} from './models/weatherForecast.model';

const API_URL = environment.apiHost;  // URL to web api

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers : new HttpHeaders({ 'Content-Type': 'application/json',  'Access-Control-Allow-Origin': `${environment.apiHost}`  }),
  };

  constructor(private http: HttpClient) { }

  public getForecast(): Observable<WeatherForecast[]> {
    const url = `${API_URL}/weatherForecast`;
    return this.http.get<WeatherForecast[]>(url);
  }
}
