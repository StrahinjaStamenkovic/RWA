import { Component } from "./component";

export enum RamType{
    ddr1,
    ddr2,
    ddr3,
    ddr4
}

export interface Ram extends Component{
    type: RamType;
    capacity: number;
    numberOfSticks: number;
    frequency: number;
    latency:string;
}