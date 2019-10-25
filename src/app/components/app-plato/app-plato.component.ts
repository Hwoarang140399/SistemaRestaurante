import { Component, OnInit } from '@angular/core';
import { Plato } from '../../models/plato';
import { Bebida } from '../../models/bebida';

@Component({
  selector: 'app-plato',
  templateUrl: './app-plato.component.html',
  styleUrls: ['./app-plato.component.css']
})
export class AppPlatoComponent implements OnInit {

  public platos: Plato[];
  public bebidas: Bebida[];

  constructor() {
    this.platos = [
      new Plato("Entrada", "Causa Rellena", 15, "https://images-gmi-pmc.edge-generalmills.com/1fdf2172-1313-49e0-b964-9c2cbb484672.jpg"),
      new Plato("Entrada", "Ceviche", 18, "https://cevicheperuano.net/wp-content/uploads/2018/10/ceviche-carretillero_700x467.jpg"),
      new Plato("Entrada", "Anticuchos", 13, "https://i2.wp.com/decomidaperuana.com/wp-content/uploads/2017/08/anticuchos-de-corazon.png?fit=514%2C302&ssl=1"),
      new Plato("Entrada", "Papa Rellena", 10, "https://images-gmi-pmc.edge-generalmills.com/185e166e-10d3-47ff-92e6-9ec8c2bfc8d3.jpg"),
      new Plato("Plato Principal", "Arroz Con Pollo", 18, "https://www.jamear.com/wp-content/uploads/2017/01/arrozconpollo-peruano.png"),
      new Plato("Plato Principal", "Pollo a la Brasa", 15, "https://gestion.pe/resizer/61sDOU1SLF6Y-0y9wf9ZB5PsYmQ=/940x569/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/DBQRWFS66VCUFHX2ODH6ITHJQI.jpg"),
      new Plato("Plato Principal", "Cau Cau", 14, "https://i.ytimg.com/vi/7Ziq6GNwFj4/maxresdefault.jpg"),
      new Plato("Plato Principal", "Arroz Chaufa", 12, "https://cde.peru.com//ima/0/1/8/7/9/1879915/924x530/gastronomia.jpg"),
      new Plato("Plato Principal", "Seco a la Norteña", 19, "https://i1.wp.com/decomidaperuana.com/wp-content/uploads/2017/08/cabrito-a-la-norte%C3%B1a-receta.png?resize=606%2C380&ssl=1"),
      new Plato("Plato Principal", "Arroz con Pato", 19, "https://comidasperuanas.net/wp-content/uploads/2015/08/Arroz-con-Pato.jpg"),
    ],
      this.bebidas = [
        new Bebida("Bebida Fria", "Gaseosa de 1 litro", 7, "http://www.elboom.com.pe/images/plato/1-litro-no-retornable28.jpg"),
        new Bebida("Bebida Fria", "Limonada Frozen", 14, "https://www.miscostillitas.com/tienda/wp-content/uploads/2019/02/limonadafrozen-600x400.jpg"),
        new Bebida("Bebida Fria", "Chicha Morada", 12, "https://img-global.cpcdn.com/002_recipes/fb099c34a483b9ed/751x532cq70/chicha-morada-foto-principal.jpg"),
        new Bebida("Bebida Fria", "Chicha de Jora", 10, "https://www.eltiempo.com.ec/media/k2/items/cache/af4bf05588f1d62ec925fc5a2b4c64d2_XL.jpg")
      ]
  }

  ngOnInit() {
  }

  ordenarPedido() {
    alert("Pedido Ordenado")
  }

}
