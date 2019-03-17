import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ClickableOfficeComponent } from './clickable-office/clickable-office.component';
import { ClickableRoomComponent } from './clickable-room/clickable-room.component';
import { AppMapComponent } from './app-map/app-map.component';
import { MissionService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    ClickableOfficeComponent,
    ClickableRoomComponent,
    AppMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
