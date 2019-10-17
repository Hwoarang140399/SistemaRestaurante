import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public erroneo: boolean;
  public user: any;
  constructor() {
    this.erroneo = false;
    this.user = {
      nombre: '',
      password: ''
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.user.nombre == "elcajamarquinoperu" && this.user.password == "admin") {
      window.location.href = '/home'
    }
    else {
      this.erroneo = true;
    }
  }

}
