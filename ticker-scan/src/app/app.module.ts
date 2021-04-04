import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PickerComponent } from './ticker-picker-component/picker.component';
import { TickerService } from './services/ticker.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HttpClient,HttpHandler } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {DatePipe} from '@angular/common';
import { SelectedTickerPipe } from './pipe/SelectedTickerPipe';
import { UnreviewedTickerPipe } from './pipe/UnreviewedTickerPipe';


@NgModule({
  declarations: [
    PickerComponent,
    AppComponent,
    SelectedTickerPipe,
    UnreviewedTickerPipe,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    HttpClientModule,
  ],
  providers: [
    TickerService,HttpClient,DatePipe,SelectedTickerPipe,UnreviewedTickerPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
