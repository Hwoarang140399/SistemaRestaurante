import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTrendComponent } from './app-trend.component';

describe('AppTrendComponent', () => {
  let component: AppTrendComponent;
  let fixture: ComponentFixture<AppTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
