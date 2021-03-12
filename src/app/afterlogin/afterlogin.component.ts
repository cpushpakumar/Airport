import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.css']
})
export class AfterloginComponent implements OnInit {

  constructor(private logoutService : LogoutService,private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    console.log("logout")
    this.logoutService.allowLogout();
    this.router.navigate([""])

  }

}
