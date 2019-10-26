import { Component, OnInit } from '@angular/core';
import { Plato } from '../../models/plato';
import { Bebida } from '../../models/bebida';
import { Postre } from 'src/app/models/postre';

@Component({
  selector: 'app-plato',
  templateUrl: './app-plato.component.html',
  styleUrls: ['./app-plato.component.css']
})
export class AppPlatoComponent implements OnInit {

  public platos: Plato[];
  public bebidas: Bebida[];
  public postres: Postre[];

  constructor() {
    this.platos = [
      new Plato("Entrada", "Papa Rellena", 10),
      new Plato("Entrada", "Anticuchos", 13),
      new Plato("Entrada", "Ceviche", 18),
      new Plato("Entrada", "Causa Rellena", 15),
      new Plato("Sopa", "Aguadito", 7),
      new Plato("Sopa", "Sopa de pollo", 8),
      new Plato("Sopa", "Sopa de Cemola", 10),
      new Plato("Sopa", "Caldo de res", 13),
      new Plato("Plato Principal", "Arroz Chaufa", 12),
      new Plato("Plato Principal", "Cau Cau", 14),
      new Plato("Plato Principal", "Pollo a la Brasa", 15),
      new Plato("Plato Principal", "Arroz Con Pollo", 18),
      new Plato("Plato Principal", "Seco a la Norteña", 19),
      new Plato("Plato Principal", "Arroz con Pato", 19),
    ],
      this.bebidas = [
        new Bebida("Bebida Fria", "Gaseosa de 1 litro", 7),
        new Bebida("Bebida Fria", "Chicha de Jora", 10),
        new Bebida("Bebida Fria", "Chicha Morada", 12),
        new Bebida("Bebida Fria", "Limonada Frozen", 14),
      ],
      this.postres = [
        new Postre("Postre", "Torta de Chocolate", 6),
        new Postre("Postre", "Keke de Vainilla", 4),
        new Postre("Postre", "Cheesecake de Maracuya", 8),
        new Postre("Postre", "Crumble de Fresas", 10)

      ]
  }

  ngOnInit() {
  }

  ordenarPedido() {
    alert("Pedido Ordenado")
  }

}
