import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPdfComponent } from './app-pdf.component';

describe('AppPdfComponent', () => {
  let component: AppPdfComponent;
  let fixture: ComponentFixture<AppPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
