import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BTH1Bai1Component } from './bth1-bai1/bth1-bai1.component';
import { BthmauB1Component } from './bthmau-b1/bthmau-b1.component';
import { BthmauB2Component } from './bthmau-b2/bthmau-b2.component';
import { BthmauB3Component } from './bthmau-b3/bthmau-b3.component';
import { Bth1Bai2Component } from './bth1-bai2/bth1-bai2.component';
import { Bth1Bai3Component } from './bth1-bai3/bth1-bai3.component';
import { Bth1Bai4Component } from './bth1-bai4/bth1-bai4.component';
import { Bth1Bai5Component } from './bth1-bai5/bth1-bai5.component';
import { Bth1Bai6Component } from './bth1-bai6/bth1-bai6.component';
import { Bth1Bai7Component } from './bth1-bai7/bth1-bai7.component';
import { Bth1Bai8Component } from './bth1-bai8/bth1-bai8.component';

@NgModule({
  declarations: [
    AppComponent,
    BTH1Bai1Component,
    BthmauB1Component,
    BthmauB2Component,
    BthmauB3Component,
    Bth1Bai2Component,
    Bth1Bai3Component,
    Bth1Bai4Component,
    Bth1Bai5Component,
    Bth1Bai6Component,
    Bth1Bai7Component,
    Bth1Bai8Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
