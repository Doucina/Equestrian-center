import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http :HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*',})
  };

  public loginUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8090/api/login", user, this.httpOptions)
  }

  public registerUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8090/api/registeruser", user, this.httpOptions)
  }
}
