import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'the-button',
  templateUrl: './the-button.component.html',
  styleUrls: ['./the-button.component.css']
})
export class TheButtonComponent implements OnInit {

  @Input() action: String;
  constructor() { }

  ngOnInit() {
  }

}
