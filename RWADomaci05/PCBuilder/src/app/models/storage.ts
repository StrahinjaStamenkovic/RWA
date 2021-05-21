import { Component } from "./component";

export enum StorageType{
    SSD,
    HDD
}

export interface Storage extends Component{
    type: StorageType;
    capacity: number;
    readSpeed: number;
    writeSpeed: number;
    formFactor: string;
}