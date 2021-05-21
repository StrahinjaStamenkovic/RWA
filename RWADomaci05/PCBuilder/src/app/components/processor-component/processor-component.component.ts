import { Component, Input, OnInit } from '@angular/core';
import { Processor } from 'src/app/models/processor';

@Component({
  selector: 'app-processor-component',
  templateUrl: './processor-component.component.html',
  styleUrls: ['./processor-component.component.scss']
})
export class ProcessorComponentComponent implements OnInit {
  @Input() cpu:Processor={
    name:"",
    manufacturer:"",
    price:0,
    socketType:"",
    baseFrequency:0,
    boostFrequency:0,
    numberOfCores:0,
    numberOfThreads:0
  }
  constructor() { }

  ngOnInit(): void {
  }

}
