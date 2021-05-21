import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CaseComponentComponent } from './components/case-component/case-component.component';
import { GraphicscardComponentComponent } from './components/graphicscard-component/graphicscard-component.component';
import { MotherboardComponentComponent } from './components/motherboard-component/motherboard-component.component';
import { PowersupplyComponentComponent } from './components/powersupply-component/powersupply-component.component';
import { ProcessorComponentComponent } from './components/processor-component/processor-component.component';
import { RamComponentComponent } from './components/ram-component/ram-component.component';
import { StorageComponentComponent } from './components/storage-component/storage-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseComponentComponent,
    GraphicscardComponentComponent,
    MotherboardComponentComponent,
    PowersupplyComponentComponent,
    ProcessorComponentComponent,
    RamComponentComponent,
    StorageComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
