import { Component, Input, OnInit } from '@angular/core';
import { Ram } from 'src/app/models/ram';

@Component({
  selector: 'app-ram-component',
  templateUrl: './ram-component.component.html',
  styleUrls: ['./ram-component.component.scss']
})
export class RamComponentComponent implements OnInit {

  @Input() ram: Ram={
    name:"",
    manufacturer:"",
    price:0,
    capacity:0,
    type:0,
    numberOfSticks:0,
    latency:"",
    frequency:0
  }
  constructor() { }

  ngOnInit(): void {
  }

}
