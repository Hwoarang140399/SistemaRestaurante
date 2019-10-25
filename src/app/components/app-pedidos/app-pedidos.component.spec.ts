import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPedidosComponent } from './app-pedidos.component';

describe('AppPedidosComponent', () => {
  let component: AppPedidosComponent;
  let fixture: ComponentFixture<AppPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
