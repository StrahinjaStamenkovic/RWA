import { Component } from "./component";

export interface GraphicsCard extends Component{
    series: string;
    vram: number;
}