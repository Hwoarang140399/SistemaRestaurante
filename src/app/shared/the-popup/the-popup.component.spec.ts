import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePopupComponent } from './the-popup.component';

describe('ThePopupComponent', () => {
  let component: ThePopupComponent;
  let fixture: ComponentFixture<ThePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
