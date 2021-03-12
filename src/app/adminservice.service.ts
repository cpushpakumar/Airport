import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  private baseUrl = 'http://localhost:7070/ams/register';
  private loginUrl = 'http://localhost:7070/ams/login';
  //private dummy = 'http://localhost:7070/ams/login/gnkgoud9@gmail.com/Pushpak@123';
  constructor(private http:HttpClient) { }

  verify : boolean;
  verified(){
    this.verify=true;
  }

  createAdmin(manager: any): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/admin`, manager);
  }

  login(email : string , password : string): Observable<any>{
    console.log(email)
    return this.http.get(`${this.loginUrl}/${email}/${password}`)
  }



}
