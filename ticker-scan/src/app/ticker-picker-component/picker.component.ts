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
import { UnreviewedTickerPipe } from '../pipe/UnreviewedTickerPipe';

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

 
    public goToLink(ticker: ITickerOnPanel){
        this.openLink(ticker);
        this.updateStatus(this.selectedTicker );
        this.refresh();
    }
    
     public onNext()
     {
         var t= this.stocks.find(t=>!t.checked&&!t.opened);
         console.log("reviewed ticker:"+t.symbol);
         this.selectedTicker =t ;
         this.goToLink(t);
      }

      public onFlag()
      {
          console.log("==>"+this.selectedTicker);
         this.onFollow(this.selectedTicker);
      }

    private onFollow(ticker:ITickerOnPanel)
    {
        ticker.checked =true;
        if (ticker!=undefined) {
            var t= this.stocks.find(s=>s.symbol===ticker.symbol);
            t.checked=true;
            this.service.flagTicker(ticker.symbol);
            this.updateStatus(ticker);
        }
        this.refresh();     
    }
   
     
    private refresh()
    {
        this.service.loadPanelStocks().subscribe(data => {
            this.stocks =[];
            data.forEach(d=>{ 
                if (d!=undefined) {
                this.stocks.push({ "symbol": d.symbol, 
                "opened": d.opened,
                "checked" :d.checked})
                }
            });
            console.log("refreshed...");
        });

    }

    private showStocks()
    {
        console.log('stocks: ', this.stocks);
    }

    private showStocksWithHeading( heading:string)
    {
        console.log(heading, JSON.stringify(this.stocks));
    }
    
    private playAudioSaved(){
        let audio = new Audio();
        audio.src = "../../assets/sounds/button-saved.mp3";
        audio.load();
        audio.play();
      }
      private playAudioClicked(){
        let audio = new Audio();
        audio.src = "../../assets/sounds/button-click.mp3";
        audio.load();
        audio.play();
      }
      

    private updateStatus(ticker:ITickerOnPanel)
    {
        console.log("updateStatus ticker:"+ticker.symbol);
         this.service.updatePanelStock(ticker).subscribe(rep=>
            {
                console.log("saved resp:"+rep);               
                this.playAudioClicked();
            });     ;
    }

    private openLink(ticker:ITickerOnPanel)
    {
        ticker.opened=true;
        this.selectedTicker = ticker;
        //var url ="https://www.google.com/search?q="+ticker.symbol+"+stock";
        var url ="https://ca.finance.yahoo.com/quote/"+ticker.symbol;
        window.open(url, "_ttblank");
    }

    get dataUri(): SafeUrl {
        const jsonData = JSON.stringify(this.stocks);
        const uri = 'data:application/json;charset=UTF-8,' + encodeURIComponent(jsonData);
        return this.sanitizer.bypassSecurityTrustUrl(uri);
      }
}