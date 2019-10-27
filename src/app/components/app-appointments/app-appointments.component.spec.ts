import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAppointmentsComponent } from './app-appointments.component';

describe('AppAppointmentsComponent', () => {
  let component: AppAppointmentsComponent;
  let fixture: ComponentFixture<AppAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
