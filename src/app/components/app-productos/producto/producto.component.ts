import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { NgForm } from '@angular/forms';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductos();
    this.resetForm();
  }

  onSubmit(productoForm: NgForm) {
    if (productoForm.value.$key == null) {
      this.productoService.insertProducto(productoForm.value);
    }
    else
      this.productoService.insertProducto(productoForm.value);
    this.resetForm(productoForm);
  }
  resetForm(productoForm?: NgForm) {
    if (productoForm != null) {
      productoForm.reset();
      this.productoService.selectedProducto = new Producto();
    }
  }

}
