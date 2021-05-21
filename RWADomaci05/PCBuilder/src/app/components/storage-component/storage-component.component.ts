import { Component, Input, OnInit } from '@angular/core';
import { Storage } from 'src/app/models/storage';

@Component({
  selector: 'app-storage-component',
  templateUrl: './storage-component.component.html',
  styleUrls: ['./storage-component.component.scss']
})
export class StorageComponentComponent implements OnInit {

  @Input() storage: Storage={
    name:"",
    manufacturer:"",
    price:0,
    formFactor:"",
    capacity:0,
    readSpeed:0,
    writeSpeed:0,
    type:0
  }
  constructor() { }

  ngOnInit(): void {
  }

}
