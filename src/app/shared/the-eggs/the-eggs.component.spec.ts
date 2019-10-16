import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheEggsComponent } from './the-eggs.component';

describe('TheEggsComponent', () => {
  let component: TheEggsComponent;
  let fixture: ComponentFixture<TheEggsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheEggsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheEggsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
