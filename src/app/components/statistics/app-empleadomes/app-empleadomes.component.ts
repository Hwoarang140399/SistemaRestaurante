import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleadomes',
  templateUrl: './app-empleadomes.component.html',
  styleUrls: ['./app-empleadomes.component.css']
})
export class AppEmpleadomesComponent implements OnInit {

  public doughnutChartLabels = ['Juan Arista', 'Mario de la Cruz',
    'Mario Torres', 'Valentina Rodriguez'];
  public doughnutChartData = [52, 68, 40, 48]
  public doughnutChartType = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}
