import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoList: AngularFireList<any>;
  selectedProducto: Producto = new Producto();
  constructor(private firebase: AngularFireDatabase) { }

  getProductos() {
    return this.productoList = this.firebase.list('stock')
  }

  insertProducto(producto: Producto) {
    this.productoList.push({
      name: producto.name,
      category: producto.category,
      provider: producto.provider,
      price: producto.price * producto.quantity,
      quantity: producto.quantity
    })
  }

  updateProducto(producto: Producto) {
    this.productoList.update(producto.$key, {
      name: producto.name,
      category: producto.category,
      provider: producto.provider,
      price: producto.price * producto.quantity,
      quantity: producto.quantity
    })
  }

  deleteProducto($key: string) {
    this.productoList.remove($key);
  }


}
