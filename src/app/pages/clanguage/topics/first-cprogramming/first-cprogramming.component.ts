import { Component, OnInit } from '@angular/core';
import {NgxWatermarkOptions} from 'ngx-watermark';

@Component({
  selector: 'app-first-cprogramming',
  templateUrl: './first-cprogramming.component.html',
  styleUrls: ['./first-cprogramming.component.scss']
})
export class FirstCProgrammingComponent implements OnInit {
  options: NgxWatermarkOptions = {
    text: 'CODER\nSimple & Charming\nLife is great',
    width: 350,
    height: 300,
    fontFamily: 'Kanit',
    color: '#999',
    alpha: 0.4,
    degree: -45,
    fontSize: '20px',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
