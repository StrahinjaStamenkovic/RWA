import { Component, Input, OnInit } from '@angular/core';
import { Case } from 'src/app/models/case';

@Component({
  selector: 'app-case-component',
  templateUrl: './case-component.component.html',
  styleUrls: ['./case-component.component.scss']
})
export class CaseComponentComponent implements OnInit {

  @Input() case:Case = {
    manufacturer:"",
    formfactor:"",
    price:0,
    name:"",
   // image:""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
