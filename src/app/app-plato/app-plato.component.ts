import { Component, OnInit } from '@angular/core';
import { AngularComponent as ArrozConPollo } from '../../static/img/platoprincipal.svg';

@Component({
  selector: 'app-plato',
  templateUrl: './app-plato.component.html',
  styleUrls: ['./app-plato.component.css']
})
export class AppPlatoComponent implements OnInit {

  constructor(image) {
    switch (image) {
      case 'arrozconpollo':
        return ArrozConPollo ;

        break;

      default:
        break;
    }
   }

  ngOnInit() {
  }

}
