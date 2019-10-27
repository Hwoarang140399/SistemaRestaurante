import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productoList: Producto[]

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getProductos().snapshotChanges().subscribe(item => {
      this.productoList = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y["$key"] = element.key;
        this.productoList.push(y as Producto);
      })
    })
  }

  onEdit(producto: Producto) {
    this.productoService.selectedProducto = Object.assign({}, producto);
  }

  onDelete($key: string) {
    this.productoService.deleteProducto($key);
  }

}
