import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { TickerService } from  '../services/ticker.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import { ITickerOnPanel } from '../models/ticker.model';
import { HttpClientModule } from '@angular/common/http';


@Component ({
    templateUrl: './picker.html',
    selector : 'picker',
    styleUrls: ['./picker.css']
})
export class PickerComponent implements OnInit {

    stocks :ITickerOnPanel[] ;
    idx:number;

    displayedColumns: string[] = ['name', 'reviewed', 'opened'];
    dataSource :any;

    checked = false;
    indeterminate = false;
    labelPosition: 'before' | 'after' = 'after';
    private _jsonURL = 'http://localhost:3000/tickers';
    disabled = false;

    service:TickerService ;

    constructor(service :TickerService,protected sanitizer: DomSanitizer,protected http: HttpClient)
    {
        this.service = service;
        this.refresh();
      }

    ngOnInit()
    {
        this.idx = 0;
        this.refresh();
    }

    refresh()
    {
        this.service.loadPanelStocks().subscribe(data => {
            console.log("...loaded....");
            this.stocks = data;
            data.forEach(d=>{ this.stocks.push(d)});
            this.dataSource = this.stocks;
        });
    }

    goToLink(ticker: any){
        ticker.opened=true;
        var url ="https://www.google.com/search?q="+ticker.symbol+"+stock";
        console.log(url);
        window.open(url, "_ttblank");
        this.onReviewed(ticker);
    }
    
     onFollow(ticker:any)
    {
        console.log("ticker=>"+ticker);
        if (ticker!=undefined) {
            var t= this.stocks.find(s=>s.symbol===ticker.symbol);
            console.log("followed ticker:"+t.symbol);
            t.checked=true;
            this.service.flagTicker(ticker.symbol);
            this.service.savePanelStocks(this.stocks).subscribe(rep=>
                {
                    this.refresh();
                });
            
        }
    }

    onReviewed(ticker:any)
    {
        var t= this.stocks.find(s=>s.symbol===ticker.symbol);
        console.log("reviewed ticker:"+  t.symbol);
        t.opened=true;
        this.service.savePanelStocks(this.stocks);
        console.log("after review ticker:"+  t.symbol);

        this.refresh();
     }

     onNext()
     {
         var t= this.stocks[this.idx];
         console.log("reviewed ticker:"+t.symbol);
         this.idx++;
         this.goToLink(t);
      }

      onFlag()
      {
         this.onFollow(this.stocks[this.idx-1])
      }
      
    showStocks()
    {
        console.log('stocks: ', this.stocks);
    }

    showStocksWithHeading( heading:string)
    {
        console.log(heading, JSON.stringify(this.stocks));
    }
    

    get dataUri(): SafeUrl {
        const jsonData = JSON.stringify(this.stocks);
        const uri = 'data:application/json;charset=UTF-8,' + encodeURIComponent(jsonData);
        return this.sanitizer.bypassSecurityTrustUrl(uri);
      }
}