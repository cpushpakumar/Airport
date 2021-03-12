import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { AftermanagerloginComponent } from './aftermanagerlogin/aftermanagerlogin.component';
import { AllothangarComponent } from './allothangar/allothangar.component';
import { AllotpilotComponent } from './allotpilot/allotpilot.component';
import { AllotplanesComponent } from './allotplanes/allotplanes.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { HangarComponent } from './hangar/hangar.component';
import { HangarslistComponent } from './hangarslist/hangarslist.component';
import { LoginComponent } from './login/login.component';
import { LogoutguardGuard } from './logoutguard.guard';
import { ManagerComponentComponent } from './manager-component/manager-component.component';
import { ManagerslistComponent } from './managerslist/managerslist.component';
import { PilotComponent } from './pilot/pilot.component';
import { PilotslistComponent } from './pilotslist/pilotslist.component';
import { PlaneComponent } from './plane/plane.component';
import { PlaneslistComponent } from './planeslist/planeslist.component';

const routes: Routes = [
  {
    path : 'add',
    component : ManagerComponentComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'afterlogin',
    component : AfterloginComponent
  },

  {
    path : 'afterlogin/addhangar',
    component : HangarComponent,
    canActivate : [LogoutguardGuard]
  },
  {
    path : 'afterlogin/addplane',
    component : PlaneComponent,
    canActivate : [LogoutguardGuard]
  },
  {
    path : 'afterlogin/addpilot',
    component : PilotComponent,
    canActivate : [LogoutguardGuard]
  },
  {
    path : 'afterlogin/viewhangar',
    component : HangarslistComponent,
    canActivate : [LogoutguardGuard]
  },
  {
    path : 'afterlogin/viewpilot',
    component : PilotslistComponent,
    canActivate : [LogoutguardGuard]
  },
  {
    path : 'afterlogin/viewplane',
    component : PlaneslistComponent,
    canActivate : [LogoutguardGuard]
  },
  {
    path : 'afterlogin/permitmanager',
    component : ManagerslistComponent,
    canActivate : [LogoutguardGuard]
  },
  {
    path : 'afterlogin/permitmanager/permit',
    component : ManagerslistComponent,
    canActivate : [LogoutguardGuard]
  },
  
  {
    path : 'allotinghangar',
    component : AllothangarComponent,
    canActivate : [LogoutguardGuard]
    
  },
  
  {
    path : 'allotingpilot',
    component : AllotpilotComponent,
    canActivate : [LogoutguardGuard]
  },
  {
    path : 'aftermanagerlogin',
    component : AftermanagerloginComponent,
  },
  {
    path : 'aftermanagerlogin/allothangarsandplanes',
    component : AllotplanesComponent,
    canActivate : [LogoutguardGuard]
  },
  {
    path : '',
    component : AppComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
