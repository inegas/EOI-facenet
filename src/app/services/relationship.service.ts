import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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

  

}
