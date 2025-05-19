import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from '../Models/sesion.model';
import { Login } from '../Models/login.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private path:string = environment.urlApi;
  private apiUrl: any = { 
    PostLogin: `${this.path}/Login/Login`,
    PostLogOut: `${this.path}/Login/LogOut`
  }
  
  constructor(private http: HttpClient) {}

  Login(login:Login){ 
    return this.http.post(this.apiUrl.PostLogin, login)
  }

  LogOut(logOut:Session){ 
    return this.http.post(this.apiUrl.PostLogOut, logOut);
  }
}
