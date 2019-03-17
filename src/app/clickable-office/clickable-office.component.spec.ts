import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableOfficeComponent } from './clickable-office.component';

describe('ClickableOfficeComponent', () => {
  let component: ClickableOfficeComponent;
  let fixture: ComponentFixture<ClickableOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClickableOfficeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
