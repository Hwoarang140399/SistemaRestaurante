import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trend',
  templateUrl: './app-trend.component.html',
  styleUrls: ['./app-trend.component.css']
})
export class AppTrendComponent implements OnInit {
  public radarChartLabels = ['Y', 'X', '-Y', '-X']
  public radarChartData = [
    { data: [120, 130, , 180, 70], label: '2018' },
    { data: [90, 150, , 200, 45], label: '2019' },
  ]
  public radarChartType = "radar"
  constructor() { }

  ngOnInit() {
  }

}
