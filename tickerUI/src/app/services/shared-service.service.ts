import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TickerModel } from '../models/ticker-model.model';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  pool : Array<TickerModel>  = [];
  ticker = new Subject<TickerModel>();
  public ticker$= this.ticker.asObservable();

  constructor() { }

  public pushTicker(ticker:TickerModel)
  {
    this.ticker.next(ticker);

    if (!this.pool.find(t=>t.code===ticker.code) ) {
      this.pool.push(ticker);
    } else {
      console.log("existing ticker in pool: "+ticker);
    }
  }

  public   popTicker(code:string) :TickerModel|undefined
  {
    return this.pool.find(t=>{
        return t.code === code;
    }) ;
  }
}
