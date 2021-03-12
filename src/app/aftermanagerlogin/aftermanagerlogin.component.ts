import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-aftermanagerlogin',
  templateUrl: './aftermanagerlogin.component.html',
  styleUrls: ['./aftermanagerlogin.component.css']
})
export class AftermanagerloginComponent implements OnInit {

  constructor(private logoutService : LogoutService,private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    console.log("logout")
    this.logoutService.allowLogout();
    this.router.navigate([""])

  }

}
