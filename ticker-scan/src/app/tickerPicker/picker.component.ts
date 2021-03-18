import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { TickerService } from '../ticker.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';

@Component ({
    templateUrl: './picker.html',
    selector : 'picker',
    styleUrls: ['./picker.css']
})
export class PickerComponent implements OnInit {

    stocks :any ;
    idx:number;

    displayedColumns: string[] = ['name', 'reviewed', 'opened'];
    dataSource :any;

    checked = false;
    indeterminate = false;
    labelPosition: 'before' | 'after' = 'after';
    private _jsonURL = 'http://localhost:8080/my-stocks.json';
    disabled = false;

    service:TickerService ;

    constructor(service :TickerService,protected sanitizer: DomSanitizer,protected http: HttpClient)
    {
        this.stocks = service.getStocks2();
        this.dataSource = this.stocks;
        console.log(this.dataSource);
        this.service = service;
    }

    ngOnInit()
    {
        this.idx = 0;
    }

    public loadStocks(): Observable<any> {
        return this.http.get(this._jsonURL);
     }

     public onLoad()
     {
        console.log("loading...");
        this.loadStocks().subscribe(data => {
            console.log(data);
            this.stocks = data;
           });
     }

    goToLink(ticker: any){
        ticker.opened=true;
        var url ="https://www.google.com/search?q="+ticker.id+"+stock";
        console.log(url);
        window.open(url, "_ttblank");
        this.onReviewed(ticker);
    }
    
    onSave()
    {
        //this.showStocks();
        localStorage.setItem('tickers', JSON.stringify(this.stocks));
        localStorage.setItem('idx', JSON.stringify(this.idx));

    }

    onRetrieve()
    {
        console.log("retrieving...");

        var retrievedObject = localStorage.getItem('tickers');
        this.stocks = JSON.parse(retrievedObject);
        var retrievedIdx = localStorage.getItem('idx');
        console.log(retrievedIdx);
        this.idx=Number(retrievedIdx);
    }

    onFollow(ticker:any)
    {
        var t= this.stocks.find(s=>s.id===ticker.id);
        console.log("followed ticker:"+t.id);
        t.checked=true;
        this.onSave();
        this.service.flagTicker(ticker.id);
    }

    onReviewed(ticker:any)
    {
        var t= this.stocks.find(s=>s.id===ticker.id);
        console.log("reviewed ticker:"+t.id);
        t.opened=true;
        this.onSave();
     }

     onNext()
     {
         var t= this.stocks[this.idx];
         console.log("reviewed ticker:"+t.id);
         this.idx++;
         this.goToLink(t);
      }

      onFlag()
      {
         this.onFollow(this.stocks[this.idx-1])
      }
      
    showStocks()
    {
        console.log('stocks: ', JSON.stringify(this.stocks));
    }
    

    get dataUri(): SafeUrl {
        const jsonData = JSON.stringify(this.stocks);
        const uri = 'data:application/json;charset=UTF-8,' + encodeURIComponent(jsonData);
        return this.sanitizer.bypassSecurityTrustUrl(uri);
      }
}