import { Pipe, PipeTransform } from '@angular/core';
import { ITickerOnPanel } from '../models/ticker.model';
@Pipe({name: 'selectedTickerPipe'})
export class SelectedTickerPipe implements PipeTransform {
  transform(tickers: ITickerOnPanel[]): ITickerOnPanel[] {
    return tickers!=undefined?tickers.filter(ticker=>ticker.checked):undefined;
  }
}