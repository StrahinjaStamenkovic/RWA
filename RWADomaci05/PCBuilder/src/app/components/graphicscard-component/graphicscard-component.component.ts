import { Component, Input, OnInit } from '@angular/core';
import { GraphicsCard } from 'src/app/models/graphicscard';

@Component({
  selector: 'app-graphicscard-component',
  templateUrl: './graphicscard-component.component.html',
  styleUrls: ['./graphicscard-component.component.scss']
})
export class GraphicscardComponentComponent implements OnInit {
  
  @Input() graphicscard:GraphicsCard = {
    manufacturer:"",
    series:"",
    price:0,
    name:"",
    vram:0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
