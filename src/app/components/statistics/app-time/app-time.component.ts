import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './app-time.component.html',
  styleUrls: ['./app-time.component.css']
})
export class AppTimeComponent implements OnInit {

  public pieChartLabels = ['Mañana', 'Tarde', 'Noche']
  public pieChartData = [105, 380, 220]
  public pieChartType = "pie"

  constructor() { }

  ngOnInit() {
  }

}
