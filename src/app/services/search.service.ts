import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/* const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
  }; */

const URL_BASE = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  searchUser(name:string){
    return this.http.get(`${URL_BASE}?name_like=${name}`);
  }

}
