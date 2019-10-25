import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../services/pedido.service'
import { NgForm } from '@angular/forms';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidoService.getPedidos();
    this.resetForm();
  }

  onSubmit(pedidoForm: NgForm) {
    if (pedidoForm.value.$key == null) {
      this.pedidoService.insertPedido(pedidoForm.value);
    }
    else
      this.pedidoService.insertPedido(pedidoForm.value);
    this.resetForm(pedidoForm);
  }

  resetForm(pedidoForm?: NgForm) {
    if (pedidoForm != null) {
      pedidoForm.reset();
      this.pedidoService.selectedPedido = new Pedido();
    }
  }


}
