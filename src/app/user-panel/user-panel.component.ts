import { Component, OnInit } from '@angular/core';
import { MissionService } from '../hero.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {
  id = "none";
  type = "type";
  subscription: Subscription;


  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(id => { this.id = id; });
    this.subscription = missionService.type$.subscribe(type => { this.type = type; });
  }

}
