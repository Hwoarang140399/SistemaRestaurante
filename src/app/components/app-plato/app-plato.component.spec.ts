import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPlatoComponent } from './app-plato.component';

describe('AppPlatoComponent', () => {
  let component: AppPlatoComponent;
  let fixture: ComponentFixture<AppPlatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPlatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
