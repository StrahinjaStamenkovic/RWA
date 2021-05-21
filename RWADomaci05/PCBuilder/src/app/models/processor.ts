import { Component } from "./component";

export interface Processor extends Component{
    socketType: string;
    baseFrequency: number;
    boostFrequency: number;
    numberOfCores: number;
    numberOfThreads: number;
}