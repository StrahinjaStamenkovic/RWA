import { Component, Input, OnInit } from '@angular/core';

import { PowerSupply } from 'src/app/models/powersupply';

@Component({
  selector: 'app-powersupply-component',
  templateUrl: './powersupply-component.component.html',
  styleUrls: ['./powersupply-component.component.scss']
})
export class PowersupplyComponentComponent implements OnInit {

  @Input() psu: PowerSupply= {
    name:"",
    manufacturer:"",
    price:0,
    certification:0,
    maximumWattage:0
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
