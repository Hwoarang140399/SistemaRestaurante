import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEmpleadomesComponent } from './app-empleadomes.component';

describe('AppEmpleadomesComponent', () => {
  let component: AppEmpleadomesComponent;
  let fixture: ComponentFixture<AppEmpleadomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEmpleadomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEmpleadomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
