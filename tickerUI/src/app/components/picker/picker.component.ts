import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TickerModel } from 'src/app/models/ticker-model.model';
import { SharedServiceService } from '../../services/shared-service.service';
import { TickerDetailServiceService } from '../../services/ticker-detail-service.service';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent implements OnInit {

  constructor( private sharedService:SharedServiceService , 
    private tickerDetailServiceService:TickerDetailServiceService) 
    { }

  tickers =["1","2"];

  event!: Event;

  ngOnInit(): void {
  }

}
