import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheStarsComponent } from './the-stars.component';

describe('TheStarsComponent', () => {
  let component: TheStarsComponent;
  let fixture: ComponentFixture<TheStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
