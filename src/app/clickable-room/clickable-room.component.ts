import { Component, OnInit } from '@angular/core';
import { MissionService } from '../hero.service';
import { Subscription } from 'rxjs';

@Component({
  selector: '.app-clickable-room',
  templateUrl: './clickable-room.component.html',
  styleUrls: ['./clickable-room.component.css']
})
export class ClickableRoomComponent {

  id = 'id';
  type = 'type';
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(id => { this.id = id; });
    this.subscription = missionService.type$.subscribe(type => { this.type = type; });
  }

  onClick(event: Event) {
    // console.log(event.srcElement.id);
    if (this.id != "id") {
      document.getElementById(this.id).setAttribute('class', 'st4');
    }
    let name = event.srcElement.id;
    let type = event.srcElement.parentElement.id;
    this.missionService.announceMission(name);
    this.missionService.returnType(type);
    document.getElementById(name).setAttribute('class', 'shining');
    // event.srcElement.
  }

}
