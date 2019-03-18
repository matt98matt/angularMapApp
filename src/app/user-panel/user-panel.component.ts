import { Component, OnInit } from '@angular/core';
import { MissionService } from '../hero.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {
  id = "id";
  type = "type";
  subscription: Subscription;


  constructor(private missionService: MissionService) {
    this.subscription = missionService.id$.subscribe(id => { this.id = id; });
    this.subscription = missionService.type$.subscribe(type => { this.type = type; });
  }

  onClickSearch(text) {
    if (this.id != "id") {
      document.getElementById(this.id).setAttribute('class', 'st4');
      if (document.getElementById(this.id).children.length != 0) {
        for (let i = 0; i < document.getElementById(this.id).children.length; i++) {
          document.getElementById(this.id).children.item(i).setAttribute('class', 'st4');
        }
      }
    }
    if (document.getElementById(text) == null) {
      console.log("zle id");
    }
    else {
      let name = document.getElementById(text).id;
      let type = document.getElementById(text).parentElement.id;
      this.missionService.returnId(name);
      this.missionService.returnType(type);
      if (document.getElementById(text).children.length != 0) {
        for (let i = 0; i < document.getElementById(text).children.length; i++) {
          document.getElementById(text).children.item(i).setAttribute('class', 'shining');
        }
      }
      else {
        document.getElementById(name).setAttribute('class', 'shining');
      }
    }

  }

}


