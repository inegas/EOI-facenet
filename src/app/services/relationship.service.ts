import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Relationship } from '../entities/relationship-model';

const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
  };

const URL_BASE = 'http://localhost:3000/relationship';

@Injectable({
  providedIn: 'root'
})
export class RelationshipService {

  constructor(private http:HttpClient) { }

  postRequest(sendRequest:Relationship){
    const url = `${URL_BASE}`;
    return this.http.post(url, sendRequest, httpOptions);
  };

}
