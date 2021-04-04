import { Pipe, PipeTransform } from '@angular/core';
import { ITickerOnPanel } from '../models/ticker.model';
@Pipe({name: 'unreviewedTickerPipe'})
export class UnreviewedTickerPipe implements PipeTransform {
  transform(tickers: ITickerOnPanel[]): ITickerOnPanel[] {
    return tickers!=undefined?
    tickers.filter(ticker=>!ticker.opened):undefined;
  }
}