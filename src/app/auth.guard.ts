import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminserviceService } from './adminservice.service';
import { Auth } from './auth';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  auth : Auth=new Auth()


  constructor(private adminService : AdminserviceService) { }

  canActivate(
  ) {
    if(this.adminService.verify)
    {
      alert("Please Login");
      return true;
    }
    else{
      alert("Please Login");
    return false;
    }
  }

}
