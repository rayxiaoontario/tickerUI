import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error401Component } from './components/error401/error401.component';
import { PickerComponent } from './components/picker/picker.component';
import { ReviwerComponent } from './components/reviwer/reviwer.component';
import { TickerPoolComponent } from './components/ticker-pool/ticker-pool.component';

const routes: Routes = [
  { path: "pick" , component: PickerComponent , } ,
  { path: "review" , component: ReviwerComponent } ,
  { path: "pool" , component: TickerPoolComponent } ,
  { path: "**" , component: Error401Component } ,

];

@NgModule({
  imports: [
RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
