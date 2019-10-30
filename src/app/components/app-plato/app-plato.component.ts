import { Component, OnInit } from '@angular/core';
// import { Plato } from '../../models/plato';
// import { Bebida } from '../../models/bebida';
// import { Postre } from 'src/app/models/postre';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plato',
  templateUrl: './app-plato.component.html',
  styleUrls: ['./app-plato.component.css']
})
export class AppPlatoComponent implements OnInit {
  searchText;
  platos = [
    { id: "Entrada", name: "Papa Rellena", price: 10 },
    { id: "Entrada", name: "Anticuchos", price: 13 },
    { id: "Entrada", name: "Ceviche", price: 18 },
    { id: "Entrada", name: "Causa Rellena", price: 15 },
    { id: "Sopa", name: "Aguadito", price: 7 },
    { id: "Sopa", name: "Sopa de pollo", price: 8 },
    { id: "Sopa", name: "Sopa de Cemola", price: 10 },
    { id: "Sopa", name: "Caldo de res", price: 13 },
    { id: "Plato Principal", name: "Arroz Chaufa", price: 12 },
    { id: "Plato Principal", name: "Cau Cau", price: 14 },
    { id: "Plato Principal", name: "Pollo a la Brasa", price: 15 },
    { id: "Plato Principal", name: "Arroz Con Pollo", price: 18 },
    { id: "Plato Principal", name: "Seco a la Norteña", price: 19 },
    { id: "Plato Principal", name: "Arroz con Pato", price: 19 }
  ]
  bebidas = [
    { id: "Bebida Fria", name: "Gaseosa de 1 litro", price: 7 },
    { id: "Bebida Fria", name: "Chicha de Jora", price: 10 },
    { id: "Bebida Fria", name: "Chicha Morada", price: 12 },
    { id: "Bebida Fria", name: "Limonada Frozen", price: 14 }
  ]
  postres = [
    { id: "Postre", name: "Torta de Chocolate", price: 6 },
    { id: "Postre", name: "Keke de Vainilla", price: 4 },
    { id: "Postre", name: "Cheesecake de Maracuya", price: 8 },
    { id: "Postre", name: "Crumble de Fresas", price: 10 }

  ]

  constructor() { }

  ngOnInit() {
  }



}
