import { Component, OnInit } from '@angular/core';
import { Case } from './models/case';
import { GraphicsCard } from './models/graphicscard';
import { Motherboard } from './models/motherboard';
import { PowerSupply, PSUCertification } from './models/powersupply';
import { Processor } from './models/processor';
import { Ram, RamType } from './models/ram';
import { Storage, StorageType } from './models/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'PCBuilder';

  cases: Case [] = [
    {
      
      formfactor: "ATX",
      manufacturer:"NZXT",
      name:"h510",
      price: 120,
     // image:" "
    },
    {
      manufacturer:"Corsair",
      name:"D5000",
      price: 80,
      formfactor: "ATX"
      //image:" "
    },
    {
      manufacturer:"NZXT",
      name:"h510",
      price: 120,
      formfactor: "ATX",
    //image:" "
    }
  ];
 graphicsCards: GraphicsCard [] = [
    {
      manufacturer:"NVidia",
      name:"RTX 3080",
      price: 800,
      vram: 10, 
      series: "RTX 3000",
      //image:""
    },
    {
      manufacturer:"NVidia",
      name:"RTX 3060ti",
      price: 600,
      vram: 12,
      series: "RTX 3000",
      //image:""
    },
    {
      manufacturer:"AMD",
      name:"RX 6900xt",
      price: 1000,
      vram: 20,
      series: "RX 6000",
      //image:""
    }
   
  ];
  motherBoards: Motherboard [] = [
    {
      name:"Tomahawk Max",
      manufacturer:"MSI",
      price:95,
      socketType:"AM4",
      formFactor:"ATX"
    }
  ];
  powerSupplies: PowerSupply [] = [
    {
      name:"Thor",
      manufacturer:"ASUS",
      price:155,
      maximumWattage:850,
      certification:PSUCertification.platinum,
    }
  ];
  processors: Processor [] = [
    {
      name:"i5-10400f",
      manufacturer:"Intel",
      price:220,
      socketType:"LGA-1155",
      baseFrequency:3.5,
      boostFrequency:4.8,
      numberOfCores:6,
      numberOfThreads:12
    },
    {
      name:"Ryzen 5 5600x",
      manufacturer:"AMD",
      price:330,
      socketType:"AM4",
      baseFrequency:4.2,
      boostFrequency:4.8,
      numberOfCores:6,
      numberOfThreads:12
    }
  ];
  ram: Ram [] = [
    {
      name:"TridentZ",
      manufacturer:"GSkill",
      price:135,
      type:RamType.ddr4,
      capacity:16,
      numberOfSticks:2,
      frequency:3600,
      latency:"CL16"
    }
  ];
  storage: Storage [] = [
    {
      name:"970Evo Plus",
      manufacturer:"Samsung",
      price:160,
      type:StorageType.SSD,
      capacity:1024,
      readSpeed:3500,
      writeSpeed:3300,
      formFactor:"M.2 NVME",
    }
  ];

  drawItems(){

  }

}
