import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Moniteur } from './moniteur';
import { Superadmin } from './superadmin';
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


  public loginAdminFromRemote(admin :Admin):Observable<any>{
    return this._http.post<any>("http://localhost:8090/api/loginAdmin", admin, this.httpOptions)
  }

  public registerAdminFromRemote(admin :Admin):Observable<any>{
    return this._http.post<any>("http://localhost:8090/api/registerAdmin", admin, this.httpOptions)
  }


  public loginSuperadminFromRemote(superadmin :Superadmin):Observable<any>{
    return this._http.post<any>("http://localhost:8090/api/loginSA", superadmin, this.httpOptions)
  }

  public registerSuperadminFromRemote(superadmin :Superadmin):Observable<any>{
    return this._http.post<any>("http://localhost:8090/api/registerSA", superadmin, this.httpOptions)
  }


  public loginMoniteurFromRemote(moniteur :Moniteur):Observable<any>{
    return this._http.post<any>("http://localhost:8090/api/loginMoniteur", moniteur, this.httpOptions)
  }

  public registerMoniteurFromRemote(moniteur :Moniteur):Observable<any>{
    return this._http.post<any>("http://localhost:8090/api/registerMoniteur", moniteur, this.httpOptions)
  }
}
