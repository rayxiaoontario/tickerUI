import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error401Component } from './components/error401/error401.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PickerComponent } from './components/picker/picker.component';
import { ReviwerComponent } from './components/reviwer/reviwer.component';
import { TickerDetailComponent } from './components/ticker-detail/ticker-detail.component';
import { TickerPoolComponent } from './components/ticker-pool/ticker-pool.component';
import { ButtonPickerComponent } from './components/button-picker/button-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    PickerComponent,
    ReviwerComponent,
    TickerPoolComponent,
    TickerDetailComponent,
    Error401Component,
    NavigationComponent,
    FooterComponent,
    ButtonPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
