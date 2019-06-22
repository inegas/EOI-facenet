import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Historie } from '../entities/historie-model';


const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
  };

const URL_BASE = 'http://localhost:3000/histories';

@Injectable({
  providedIn: 'root'
})
export class HistoriesService {

  constructor(private http:HttpClient) { }

  postHistorie(historie:Historie){
    const url = `${URL_BASE}`;
    return this.http.post(url, historie, httpOptions);
  };
}
