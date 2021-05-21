import { Component, Input, OnInit } from '@angular/core';
import { Motherboard } from 'src/app/models/motherboard';

@Component({
  selector: 'app-motherboard-component',
  templateUrl: './motherboard-component.component.html',
  styleUrls: ['./motherboard-component.component.scss']
})
export class MotherboardComponentComponent implements OnInit {
  @Input() motherboard:Motherboard = {
    manufacturer:"",
    formFactor:"",
    price:0,
    name:"",
    socketType:""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
