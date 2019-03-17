import { Component, OnInit } from '@angular/core';
import { MissionService } from '../hero.service';

@Component({
  selector: '.app-clickable-room',
  templateUrl: './clickable-room.component.html',
  styleUrls: ['./clickable-room.component.css']
})
export class ClickableRoomComponent {

  id = 'id';
  type = 'type';


  constructor(private missionService: MissionService) {

  }

  onClick(event: Event) {
    // console.log(event.srcElement.id);
    let name = event.srcElement.id;
    let type = event.srcElement.parentElement.id;
    this.missionService.announceMission(name);
    this.missionService.returnType(type);
    document.getElementById(name).setAttribute('class', 'shining');
    // event.srcElement.
  }

}
