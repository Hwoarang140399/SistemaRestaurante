import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductosComponent } from './app-productos.component';

describe('AppProductosComponent', () => {
  let component: AppProductosComponent;
  let fixture: ComponentFixture<AppProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
