import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './app-chart.component.html',
  styleUrls: ['./app-chart.component.css']
})
export class AppChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    layout: {
      padding: {
        top: 100,
        bottom: 100
      }
    },
    legend: {
      display: true,
      labels: {
        fontColor: '#000'
      }
    },
    title: {
      display: true,
      text: 'Balance mensual de platos más vendidos'
    }
  }

  public barChartLabels = ['Enero', 'Febrero', 'Marzo',
    'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre']

  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [{ data: [54, 67, 34, 45, 24, 46, 37, 54, 61], label: 'Pollo a la brasa' },
  { data: [34, 24, 44, 35, 19, 36, 40, 57, 63], label: 'Seco a la norteña' },
  { data: [24, 47, 54, 25, 34, 66, 27, 62, 31], label: 'Arroz Chaufa' },
  { data: [18, 57, 64, 35, 24, 46, 37, 22, 41], label: 'Arroz con Pato', backgroundColor: '#6060d5' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
