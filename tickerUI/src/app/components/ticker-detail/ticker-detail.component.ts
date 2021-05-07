import { Component, Input, OnInit } from '@angular/core';
import { TickerModel } from 'src/app/models/ticker-model.model';
import { TickerDetailServiceService } from 'src/app/services/ticker-detail-service.service';
import { SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'app-ticker-detail',
  templateUrl: './ticker-detail.component.html',
  styleUrls: ['./ticker-detail.component.css']
})
export class TickerDetailComponent implements OnInit {

  constructor(
    private tickerDetailServiceService:TickerDetailServiceService,
    private sharedServiceService:SharedServiceService) { 
      this.sharedServiceService.ticker$.subscribe(
        data => {this.ticker= data;}
      )
    }
  
  @Input()
  ticker!: TickerModel;

  ngOnInit(): void {}

  onShow()
  {
    console.log(this.ticker);
  }
}
