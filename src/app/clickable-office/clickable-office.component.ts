import { Component, Input } from '@angular/core';
import { MissionService } from '../hero.service';
import { Subscription } from 'rxjs';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { element } from '@angular/core/src/render3';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: '.app-clickable-office',
  templateUrl: './clickable-office.component.html',
  styleUrls: ['./clickable-office.component.css']

})
export class ClickableOfficeComponent {
  id = 'id';
  type = 'type';
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.id$.subscribe(id => { this.id = id; });
    this.subscription = missionService.type$.subscribe(type => { this.type = type; });
  }


  onClick(event: Event) {
    if (this.id != "id") {
      document.getElementById(this.id).setAttribute('class', 'st4');
      if (document.getElementById(this.id).children.length != 0) {
        for (let i = 0; i < document.getElementById(this.id).children.length; i++) {
          document.getElementById(this.id).children.item(i).setAttribute('class', 'st4');
        }
      }
    }
    let name = event.srcElement.id;
    let type = event.srcElement.parentElement.id;
    this.missionService.returnId(name);
    this.missionService.returnType(type);
    document.getElementById(name).setAttribute('class', 'shining');
    // event.srcElement.
  }
}
