import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableRoomComponent } from './clickable-room.component';

describe('ClickableRoomComponent', () => {
  let component: ClickableRoomComponent;
  let fixture: ComponentFixture<ClickableRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickableRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
