import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidoList: AngularFireList<any>;
  selectedPedido: Pedido = new Pedido();
  constructor(private firebase: AngularFireDatabase) { }

  getPedidos() {
    //esta linea guarda en la colección pedido
    return this.pedidoList = this.firebase.list('pedidos')
  }

  insertPedido(pedido: Pedido) {
    this.pedidoList.push({
      //push es un metodo que se encarga de insertar
      //a partir del modelo
      name: pedido.name,
      category: pedido.category,
      price: pedido.price * pedido.quantity,
      quantity: pedido.quantity
    });
  }

  updatePedido(pedido: Pedido) {
    this.pedidoList.update(pedido.$key, {
      name: pedido.name,
      category: pedido.category,
      price: pedido.price * pedido.quantity,
      quantity: pedido.quantity
    });
  }

  deletePedido($key: string) {
    this.pedidoList.remove($key);
  }

}
