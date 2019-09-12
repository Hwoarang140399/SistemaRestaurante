import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-plato',
  templateUrl: './app-plato.component.html',
  styleUrls: ['./app-plato.component.css']
})
export class AppPlatoComponent implements OnInit {

  public platos = [
    {"id": "arrozconpollo",
    imageUrl: "https://www.jamear.com/wp-content/uploads/2017/01/arrozconpollo-peruano.png",
    "name": "Arroz Con Pollo"},

    {"id": "polloalabrasa",
    imageUrl: "https://gestion.pe/resizer/61sDOU1SLF6Y-0y9wf9ZB5PsYmQ=/940x569/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/DBQRWFS66VCUFHX2ODH6ITHJQI.jpg",
    "name": "Pollo a la Brasa"},

    {"id": "causarellena",
    imageUrl: "https://images-gmi-pmc.edge-generalmills.com/1fdf2172-1313-49e0-b964-9c2cbb484672.jpg",
    "name": "Causa Rellena"},

    {"id": "secodepato",
    imageUrl: "https://i.ytimg.com/vi/7Ziq6GNwFj4/maxresdefault.jpg",
    "name": "Seco de Pato"}

 ]

  constructor() {

   }

  ngOnInit() {
  }

}
