import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PickerComponent } from './tickerPicker/picker.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { TickerService } from './ticker.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HttpClient,HttpHandler } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    PickerComponent,
    AppComponent,
    NewCourseComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    TickerService,HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
