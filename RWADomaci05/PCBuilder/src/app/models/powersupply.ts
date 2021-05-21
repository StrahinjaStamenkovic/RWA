import { Component } from "./component";

export enum PSUCertification{
    none=0,
    white=80,
    bronze=85,
    silver=88,
    gold=90,
    platinum=92,
    titanium=94
}
export interface PowerSupply extends Component{
    certification: PSUCertification;
    maximumWattage: number;
}