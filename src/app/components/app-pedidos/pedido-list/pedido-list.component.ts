import { Component, OnInit } from '@angular/core';
//service
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/models/pedido';


@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})
export class PedidoListComponent implements OnInit {

  pedidoList: Pedido[]
  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidoService.getPedidos().snapshotChanges().subscribe(item => {
      this.pedidoList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.pedidoList.push(x as Pedido);
      })
    })
  }

  onEdit(pedido: Pedido) {
    this.pedidoService.selectedPedido = Object.assign({}, pedido);

  }

  onDelete($key: string) {
    this.pedidoService.deletePedido($key);
  }
}
