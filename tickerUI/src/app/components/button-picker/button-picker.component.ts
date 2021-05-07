import { Component, Input, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { TickerDetailServiceService } from 'src/app/services/ticker-detail-service.service';

@Component({
  selector: 'app-button-picker',
  templateUrl: './button-picker.component.html',
  styleUrls: ['./button-picker.component.css']
})
export class ButtonPickerComponent implements OnInit {


  constructor(private sharedService:SharedServiceService , 
    private tickerDetailServiceService:TickerDetailServiceService) { }

    @Input()
  ticker! :string ;

  ngOnInit(): void {
  }

  onSelect()
  {
    if (this.ticker!=undefined) {
      this.sharedService.pushTicker(this.tickerDetailServiceService.getTickerDetail(this.ticker));
    }
  }
}
