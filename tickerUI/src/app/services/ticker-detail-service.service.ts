import { Injectable } from '@angular/core';
import { TickerModel } from '../models/ticker-model.model';

@Injectable({
  providedIn: 'root'
})
export class TickerDetailServiceService {

  constructor() { }

  public  getTickerDetail(code :string) :TickerModel
  {
    return new TickerModel(code,"Name of "+ code) ;
  }
}
