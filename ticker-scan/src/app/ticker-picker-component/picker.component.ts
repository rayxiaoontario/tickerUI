import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { TickerService } from  '../services/ticker.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import { ITickerOnPanel } from '../models/ticker.model';
import { HttpClientModule } from '@angular/common/http';
import { SelectedTickerPipe } from '../pipe/SelectedTickerPipe';

@Component ({
    templateUrl: './picker.html',
    selector : 'picker',
    styleUrls: ['./picker.css']
})
export class PickerComponent implements OnInit {

    stocks :ITickerOnPanel[] ;
    selectedTicker: ITickerOnPanel;
    idx:number;

    displayedColumns: string[] = ['Symbol'];
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
        console.log("refreshing..");
        this.service.loadPanelStocks().subscribe(data => {
            this.stocks =[];
            data.forEach(d=>{ 
                if (d!=undefined) {
                 this.stocks.push({ "symbol": d.symbol, 
                "opened": d.opened,
                 "checked" :d.checked})
                }
            });
            this.dataSource = this.stocks ;
        });
    }

    goToLink(ticker: ITickerOnPanel){
        this.openLink(ticker);
        ticker.opened = true;
        this.updateStatus(ticker);
    }
    
     onFollow(ticker:any)
    {
        console.log("followed=>"+ticker);

        if (ticker!=undefined) {
            var t= this.stocks.find(s=>s.symbol===ticker.symbol);
            console.log("followed ticker:"+t.symbol);
            t.checked=true;
            this.service.flagTicker(ticker.symbol);
            this.service.updatePanelStock(ticker).subscribe(rep=>
                {
                    console.log("saved resp:"+rep);
                });     
        }
        this.refresh();     
    }

    onReviewed(ticker:ITickerOnPanel)
    {
        ticker.opened = true ;
        this.openLink(ticker);
        this.updateStatus(ticker);
     }

     onNext()
     {
         var t= this.stocks.find(t=>!t.checked&&!t.opened);
         console.log("reviewed ticker:"+t.symbol);
         this.selectedTicker =t ;
         this.goToLink(t);
      }

      onFlag()
      {
         this.onFollow(this.selectedTicker);
      }
      
    showStocks()
    {
        console.log('stocks: ', this.stocks);
    }

    showStocksWithHeading( heading:string)
    {
        console.log(heading, JSON.stringify(this.stocks));
    }
    

    private updateStatus(ticker:any)
    {
        console.log("updateStatus ticker:"+ticker.symbol);
         this.service.updatePanelStock(ticker);
    }

    private openLink(ticker:any)
    {
        ticker.opened=true;
        var url ="https://www.google.com/search?q="+ticker.symbol+"+stock";
        console.log(url);
        window.open(url, "_ttblank");
    }

    get dataUri(): SafeUrl {
        const jsonData = JSON.stringify(this.stocks);
        const uri = 'data:application/json;charset=UTF-8,' + encodeURIComponent(jsonData);
        return this.sanitizer.bypassSecurityTrustUrl(uri);
      }
}