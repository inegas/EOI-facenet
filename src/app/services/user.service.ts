import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Historie } from '../entities/historie-model';
import { User } from '../entities/user-model';

const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
  };

const URL_BASE = 'http://localhost:3000/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 /*  userLogged:User; */
  id = 1;

  constructor(private http:HttpClient) { }

  getUser(){
    const url = `${URL_BASE}/${this.id}`;
    return this.http.get(url);
  };

  getAllUsers(){
    const url = `${URL_BASE}?id_ne=1`;
    return this.http.get(url);
  };
}
