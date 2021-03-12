import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pilot } from '../pilot';
import { PilotService } from '../pilot.service';
import { Plane } from '../plane';

@Component({
  selector: 'app-allotpilot',
  templateUrl: './allotpilot.component.html',
  styleUrls: ['./allotpilot.component.css']
})
export class AllotpilotComponent implements OnInit {

  pilot : Pilot = new Pilot();


  p: Number = 1;
  count: Number = 3;

  pilots : Observable<Pilot[]>;

  constructor(private pilotService : PilotService) { }

  ngOnInit() {
    this.pilotList()
  }

  pilotList(){
    this.pilots=this.pilotService.getAllPilots();
    console.log(this.pilots[1]);
  }

  allotplane(pilot: Pilot) {
    let id = localStorage.getItem("id");
 
    this.pilotService.allotinghangarsandplanes(pilot, id).subscribe(
      data => {
        this.pilotList();
        console.log(data);
        console.log(data.pilot)
      },
      error => console.log(error));
 
  }

}
