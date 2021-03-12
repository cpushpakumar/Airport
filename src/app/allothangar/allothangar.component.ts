import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hangar } from '../hangar';
import { HangarService } from '../hangar.service';
import { Plane } from '../plane';

@Component({
  selector: 'app-allothangar',
  templateUrl: './allothangar.component.html',
  styleUrls: ['./allothangar.component.css']
})
export class AllothangarComponent implements OnInit {

  @Input() plane : Plane;

  p: Number = 1;
  count: Number = 3;

  hangars : Observable<Hangar[]>;

  constructor(private hangarService : HangarService) { }

  ngOnInit() {
    this.hangarsList()

  }

  hangarsList(){
    this.hangars=this.hangarService.getAllHangars();
    console.log(this.hangars)
  }

  allotplane(hangar: Hangar) {
    let id = localStorage.getItem("id");
 
    this.hangarService.allotinghangarsandplanes(hangar, id).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      },
      error => console.log(error));
 
  }

  refplane(plane : Plane){
    this.plane=plane;

  }

}
