import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AllothangarComponent } from '../allothangar/allothangar.component';
import { AllotpilotComponent } from '../allotpilot/allotpilot.component';
import { HangarService } from '../hangar.service';
import { Plane } from '../plane';
import { PlaneService } from '../plane.service';

@Component({
  selector: 'app-allotplanes',
  templateUrl: './allotplanes.component.html',
  styleUrls: ['./allotplanes.component.css']
})
export class AllotplanesComponent implements OnInit {

  p: Number = 1;
  count: Number = 3;

  planes : Observable<Plane[]>;

  constructor(private planeService : PlaneService, private router:Router,private hangarService : HangarService ) { }

  ngOnInit() {
    this.planeList()
  }

  planeList(){
    this.planes=this.planeService.getAllPlanes();
  }

  allotHangar(plane : Plane){
    localStorage.setItem("id",plane.planeId.toString());
    console.log(plane)
    //this.hangarService.refPlane(plane);
    this.router.navigate(["allotinghangar"])
 
  }

  allotPilot(plane : Plane){
    localStorage.setItem("id",plane.planeId.toString());
    console.log(plane)
    this.router.navigate(["allotingpilot"])

  }


}
