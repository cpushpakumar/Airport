import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ManagerComponentComponent } from './manager-component/manager-component.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PilotComponent } from './pilot/pilot.component';
import { PlaneComponent } from './plane/plane.component';
import { HangarComponent } from './hangar/hangar.component';
import { AuthGuard } from './auth.guard';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { HangarslistComponent } from './hangarslist/hangarslist.component';
import { PlaneslistComponent } from './planeslist/planeslist.component';
import { PilotslistComponent } from './pilotslist/pilotslist.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ManagerslistComponent } from './managerslist/managerslist.component';
import { AllotplanesComponent } from './allotplanes/allotplanes.component';
import { AllotpilotComponent } from './allotpilot/allotpilot.component';
import { AllothangarComponent } from './allothangar/allothangar.component';
import { AftermanagerloginComponent } from './aftermanagerlogin/aftermanagerlogin.component';
import { LogoutComponent } from './logout/logout.component';
import { LogoutguardGuard } from './logoutguard.guard';



@NgModule({
  declarations: [
    AppComponent,
    ManagerComponentComponent,
    LoginComponent,
    PilotComponent,
    PlaneComponent,
    HangarComponent,
    AfterloginComponent,
    HangarslistComponent,
    PlaneslistComponent,
    PilotslistComponent,
    ManagerslistComponent,
    AllotplanesComponent,
    AllotpilotComponent,
    AllothangarComponent,
    AftermanagerloginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [AuthGuard,
  LogoutguardGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
