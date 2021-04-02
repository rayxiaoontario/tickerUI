import { Injectable } from '@angular/core';
import { IFlaggedTicker } from '../models/ticker.model';
import {DatePipe} from '@angular/common';
import { ITickerOnPanel } from '../models/ticker.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TickerService {

  private _jsonURL = 'http://localhost:3000/tickers';

  flaggedStocks:Array<IFlaggedTicker> = new Array<IFlaggedTicker>();

  constructor(private datePipe: DatePipe, private http: HttpClient) {}


  /*public loadStockOnPannel() : Array<ITickerOnPanel>
  {
    return  [{"symbol":"SY","checked":false,"opened":false},{"symbol":"CD","checked":false,"opened":false},{"symbol":"SPI","checked":false,"opened":false},{"symbol":"HUDI","checked":false,"opened":false},{"symbol":"METX","checked":false,"opened":false},{"symbol":"MFH","checked":false,"opened":false},{"symbol":"DQ","checked":false,"opened":false},{"symbol":"SJ","checked":false,"opened":false},{"symbol":"LEDS","checked":false,"opened":false},{"symbol":"LITB","checked":false,"opened":false},{"symbol":"WBAI","checked":false,"opened":false},{"symbol":"FINV","checked":false,"opened":false},{"symbol":"ATIF","checked":false,"opened":false},{"symbol":"OIIM","checked":false,"opened":false},{"symbol":"GLG","checked":false,"opened":false},{"symbol":"CSCW","checked":false,"opened":false},{"symbol":"MLCO","checked":false,"opened":false},{"symbol":"MSC","checked":false,"opened":false},{"symbol":"CSIQ","checked":false,"opened":false},{"symbol":"JKS","checked":false,"opened":false},{"symbol":"NINE","checked":false,"opened":false},{"symbol":"KC","checked":false,"opened":false},{"symbol":"HMI","checked":false,"opened":false},{"symbol":"HIMX","checked":false,"opened":false},{"symbol":"YRD","checked":false,"opened":false},{"symbol":"LXEH","checked":false,"opened":false},{"symbol":"WAFU","checked":false,"opened":false},{"symbol":"LOAC","checked":false,"opened":false},{"symbol":"CJJD","checked":false,"opened":false},{"symbol":"COE","checked":false,"opened":false},{"symbol":"RLX","checked":false,"opened":false},{"symbol":"CNR","checked":false,"opened":false},{"symbol":"EH","checked":false,"opened":false},{"symbol":"IMAB","checked":false,"opened":false},{"symbol":"FENG","checked":false,"opened":false},{"symbol":"SIMO","checked":false,"opened":false},{"symbol":"NTES","checked":false,"opened":false},{"symbol":"BEDU","checked":false,"opened":false},{"symbol":"GSX","checked":false,"opened":false},{"symbol":"DAO","checked":false,"opened":false},{"symbol":"PUYI","checked":false,"opened":false},{"symbol":"UMC","checked":false,"opened":false},{"symbol":"NFH","checked":false,"opened":false},{"symbol":"JD","checked":false,"opened":false},{"symbol":"GSUM","checked":false,"opened":false},{"symbol":"FTNT","checked":false,"opened":false},{"symbol":"HLG","checked":false,"opened":false},{"symbol":"PLAG","checked":false,"opened":false},{"symbol":"REDU","checked":false,"opened":false},{"symbol":"GDS","checked":false,"opened":false},{"symbol":"IDEX","checked":false,"opened":false},{"symbol":"RUHN","checked":false,"opened":false},{"symbol":"IQ","checked":false,"opened":false},{"symbol":"NIU","checked":false,"opened":false},{"symbol":"BRLIU","checked":false,"opened":false},{"symbol":"KBSF","checked":false,"opened":false},{"symbol":"DL","checked":false,"opened":false},{"symbol":"GRNV","checked":false,"opened":false},{"symbol":"HKIB","checked":false,"opened":false},{"symbol":"ZLAB","checked":false,"opened":false},{"symbol":"YY","checked":false,"opened":false},{"symbol":"PDD","checked":false,"opened":false},{"symbol":"QTT","checked":false,"opened":false},{"symbol":"DNK","checked":false,"opened":false},{"symbol":"NVFY","checked":false,"opened":false},{"symbol":"CNF","checked":false,"opened":false},{"symbol":"IH","checked":false,"opened":false},{"symbol":"LX","checked":false,"opened":false},{"symbol":"FEDU","checked":false,"opened":false},{"symbol":"SINA","checked":false,"opened":false},{"symbol":"TSM","checked":false,"opened":false},{"symbol":"CBPO","checked":false,"opened":false},{"symbol":"AGMH","checked":false,"opened":false},{"symbol":"ASX","checked":false,"opened":false},{"symbol":"HTHT","checked":false,"opened":false},{"symbol":"CBAT","checked":false,"opened":false},{"symbol":"TAL","checked":false,"opened":false},{"symbol":"AACG","checked":false,"opened":false},{"symbol":"DSWL","checked":false,"opened":false},{"symbol":"UK","checked":false,"opened":false},{"symbol":"TCOM","checked":false,"opened":false},{"symbol":"GTEC","checked":false,"opened":false},{"symbol":"CREG","checked":false,"opened":false},{"symbol":"QH","checked":false,"opened":false},{"symbol":"EDU","checked":false,"opened":false},{"symbol":"CAF","checked":false,"opened":false},{"symbol":"GHG","checked":false,"opened":false},{"symbol":"YUMC","checked":false,"opened":false},{"symbol":"NTP","checked":false,"opened":false},{"symbol":"NEW","checked":false,"opened":false},{"symbol":"SOGO","checked":false,"opened":false},{"symbol":"BYSI","checked":false,"opened":false},{"symbol":"OSN","checked":false,"opened":false},{"symbol":"HOLI","checked":false,"opened":false},{"symbol":"KWEB","checked":false,"opened":false},{"symbol":"KNDI","checked":false,"opened":false},{"symbol":"CTK","checked":false,"opened":false},{"symbol":"FUTU","checked":false,"opened":false},{"symbol":"ZGYH","checked":false,"opened":false},{"symbol":"SEED","checked":false,"opened":false},{"symbol":"BNR","checked":false,"opened":false},{"symbol":"ANPC","checked":false,"opened":false},{"symbol":"OCFT","checked":false,"opened":false},{"symbol":"ZTO","checked":false,"opened":false},{"symbol":"SFUN","checked":false,"opened":false},{"symbol":"LEJU","checked":false,"opened":false},{"symbol":"BABA","checked":false,"opened":false},{"symbol":"VNET","checked":false,"opened":false},{"symbol":"CMCM","checked":false,"opened":false},{"symbol":"ASHR","checked":false,"opened":false},{"symbol":"LEGN","checked":false,"opened":false},{"symbol":"TME","checked":false,"opened":false},{"symbol":"CCAC","checked":false,"opened":false},{"symbol":"SDH","checked":false,"opened":false},{"symbol":"CHT","checked":false,"opened":false},{"symbol":"JOBS","checked":false,"opened":false},{"symbol":"TLC","checked":false,"opened":false},{"symbol":"IMOS","checked":false,"opened":false},{"symbol":"CAAS","checked":false,"opened":false},{"symbol":"ADAG","checked":false,"opened":false},{"symbol":"JP","checked":false,"opened":false},{"symbol":"BEKE","checked":false,"opened":false},{"symbol":"TEDU","checked":false,"opened":false},{"symbol":"PTR","checked":false,"opened":false},{"symbol":"CQQQ","checked":false,"opened":false},{"symbol":"CCRC","checked":false,"opened":false},{"symbol":"CYD","checked":false,"opened":false},{"symbol":"CCNC","checked":false,"opened":false},{"symbol":"QFIN","checked":false,"opened":false},{"symbol":"FXI","checked":false,"opened":false},{"symbol":"CXDC","checked":false,"opened":false},{"symbol":"SONO","checked":false,"opened":false},{"symbol":"LAIX","checked":false,"opened":false},{"symbol":"MNSO","checked":false,"opened":false},{"symbol":"SOL","checked":false,"opened":false},{"symbol":"LI","checked":false,"opened":false},{"symbol":"ANTE","checked":false,"opened":false},{"symbol":"LFC","checked":false,"opened":false},{"symbol":"MOMO","checked":false,"opened":false},{"symbol":"PME","checked":false,"opened":false},{"symbol":"HIHO","checked":false,"opened":false},{"symbol":"LU","checked":false,"opened":false},{"symbol":"ZNH","checked":false,"opened":false},{"symbol":"ICLK","checked":false,"opened":false},{"symbol":"NIO","checked":false,"opened":false},{"symbol":"CEA","checked":false,"opened":false},{"symbol":"EZGO","checked":false,"opened":false},{"symbol":"RCON","checked":false,"opened":false},{"symbol":"GIGM","checked":false,"opened":false},{"symbol":"APWC","checked":false,"opened":false},{"symbol":"WEI","checked":false,"opened":false},{"symbol":"XIN","checked":false,"opened":false},{"symbol":"SECO","checked":false,"opened":false},{"symbol":"MGI","checked":false,"opened":false},{"symbol":"NEWA","checked":false,"opened":false},{"symbol":"TC","checked":false,"opened":false},{"symbol":"AIH","checked":false,"opened":false},{"symbol":"UXIN","checked":false,"opened":false},{"symbol":"BAOS","checked":false,"opened":false},{"symbol":"BRY","checked":false,"opened":false},{"symbol":"ZCMD","checked":false,"opened":false},{"symbol":"COWN","checked":false,"opened":false},{"symbol":"SHI","checked":false,"opened":false},{"symbol":"CCM","checked":false,"opened":false},{"symbol":"DUO","checked":false,"opened":false},{"symbol":"ATHM","checked":false,"opened":false},{"symbol":"CPHI","checked":false,"opened":false},{"symbol":"CEO","checked":false,"opened":false},{"symbol":"HUSN","checked":false,"opened":false},{"symbol":"HAPP","checked":false,"opened":false},{"symbol":"VIPS","checked":false,"opened":false},{"symbol":"BGNE","checked":false,"opened":false},{"symbol":"BZUN","checked":false,"opened":false},{"symbol":"YGMZ","checked":false,"opened":false},{"symbol":"YJ","checked":false,"opened":false},{"symbol":"SOHU","checked":false,"opened":false},{"symbol":"YSG","checked":false,"opened":false},{"symbol":"DADA","checked":false,"opened":false},{"symbol":"UCL","checked":false,"opened":false},{"symbol":"AMBO","checked":false,"opened":false},{"symbol":"XNET","checked":false,"opened":false},{"symbol":"PBTS","checked":false,"opened":false},{"symbol":"GRCL","checked":false,"opened":false},{"symbol":"API","checked":false,"opened":false},{"symbol":"AMC","checked":false,"opened":false},{"symbol":"MTC","checked":false,"opened":false},{"symbol":"HNP","checked":false,"opened":false},{"symbol":"PLIN","checked":false,"opened":false},{"symbol":"ACH","checked":false,"opened":false},{"symbol":"CAN","checked":false,"opened":false},{"symbol":"MDJH","checked":false,"opened":false},{"symbol":"NBAC","checked":false,"opened":false},{"symbol":"HCM","checked":false,"opened":false},{"symbol":"CIH","checked":false,"opened":false},{"symbol":"FTFT","checked":false,"opened":false},{"symbol":"BRQS","checked":false,"opened":false},{"symbol":"XPEV","checked":false,"opened":false},{"symbol":"BIDU","checked":false,"opened":false},{"symbol":"TIGR","checked":false,"opened":false},{"symbol":"SNP","checked":false,"opened":false},{"symbol":"APM","checked":false,"opened":false},{"symbol":"WB","checked":false,"opened":false},{"symbol":"BIMI","checked":false,"opened":false},{"symbol":"ZEPP","checked":false,"opened":false},{"symbol":"DTSS","checked":false,"opened":false},{"symbol":"ITP","checked":false,"opened":false},{"symbol":"YI","checked":false,"opened":false},{"symbol":"DOYU","checked":false,"opened":false},{"symbol":"BTBT","checked":false,"opened":false},{"symbol":"KUKE","checked":false,"opened":false},{"symbol":"TANH","checked":false,"opened":false},{"symbol":"CNET","checked":false,"opened":false},{"symbol":"WIMI","checked":false,"opened":false},{"symbol":"OCG","checked":false,"opened":false},{"symbol":"BILI","checked":false,"opened":false},{"symbol":"NOAH","checked":false,"opened":false},{"symbol":"YALA","checked":false,"opened":false},{"symbol":"XYF","checked":false,"opened":false},{"symbol":"BEST","checked":false,"opened":false},{"symbol":"JG","checked":false,"opened":false},{"symbol":"RYB","checked":false,"opened":false},{"symbol":"ONE","checked":false,"opened":false},{"symbol":"GURE","checked":false,"opened":false},{"symbol":"WNW","checked":false,"opened":false},{"symbol":"BNSO","checked":false,"opened":false},{"symbol":"TIRX","checked":false,"opened":false},{"symbol":"CLWT","checked":false,"opened":false},{"symbol":"UTSI","checked":false,"opened":false},{"symbol":"JRJC","checked":false,"opened":false},{"symbol":"YQ","checked":false,"opened":false},{"symbol":"QD","checked":false,"opened":false},{"symbol":"LLIT","checked":false,"opened":false},{"symbol":"RETO","checked":false,"opened":false},{"symbol":"HUYA","checked":false,"opened":false},{"symbol":"EDTK","checked":false,"opened":false},{"symbol":"GTH","checked":false,"opened":false},{"symbol":"QLI","checked":false,"opened":false},{"symbol":"AEHL","checked":false,"opened":false},{"symbol":"QK","checked":false,"opened":false},{"symbol":"FANH","checked":false,"opened":false},{"symbol":"EVK","checked":false,"opened":false},{"symbol":"TOUR","checked":false,"opened":false},{"symbol":"HUIZ","checked":false,"opened":false},{"symbol":"SVM","checked":false,"opened":false},{"symbol":"BQ","checked":false,"opened":false},{"symbol":"CO","checked":false,"opened":false},{"symbol":"IFMK","checked":false,"opened":false},{"symbol":"OPRA","checked":false,"opened":false},{"symbol":"NISN","checked":false,"opened":false},{"symbol":"GSMG","checked":false,"opened":false},{"symbol":"AIHS","checked":false,"opened":false},{"symbol":"BLCT","checked":false,"opened":false},{"symbol":"RENN","checked":false,"opened":false},{"symbol":"SGOC","checked":false,"opened":false},{"symbol":"TKAT","checked":false,"opened":false},{"symbol":"BHAT","checked":false,"opened":false},{"symbol":"TYHT","checked":false,"opened":false},{"symbol":"EBON","checked":false,"opened":false},{"symbol":"CHNR","checked":false,"opened":false},{"symbol":"VIOT","checked":false,"opened":false},{"symbol":"SXTC","checked":false,"opened":false},{"symbol":"DXF","checked":false,"opened":false},{"symbol":"STG","checked":false,"opened":false},{"symbol":"JFU","checked":false,"opened":false},{"symbol":"MOHO","checked":false,"opened":false},{"symbol":"CGA","checked":false,"opened":false},{"symbol":"KXIN","checked":false,"opened":false},{"symbol":"HGSH","checked":false,"opened":false},{"symbol":"JFIN","checked":false,"opened":false},{"symbol":"CNEY","checked":false,"opened":false},{"symbol":"EGO","checked":false,"opened":false},{"symbol":"LYL","checked":false,"opened":false},{"symbol":"DOGZ","checked":false,"opened":false},{"symbol":"PT","checked":false,"opened":false},{"symbol":"MOGU","checked":false,"opened":false},{"symbol":"RAAS","checked":false,"opened":false},{"symbol":"PHCF","checked":false,"opened":false},{"symbol":"HX","checked":false,"opened":false},{"symbol":"MKD","checked":false,"opened":false},{"symbol":"CANG","checked":false,"opened":false},{"symbol":"CLPS","checked":false,"opened":false},{"symbol":"LIZI","checked":false,"opened":false},{"symbol":"JT","checked":false,"opened":false},{"symbol":"FFHL","checked":false,"opened":false},{"symbol":"FAMI","checked":false,"opened":false},{"symbol":"KRKR","checked":false,"opened":false},{"symbol":"MYT","checked":false,"opened":false},{"symbol":"MOXC","checked":false,"opened":false},{"symbol":"CLEU","checked":false,"opened":false},{"symbol":"LKCO","checked":false,"opened":false},{"symbol":"TAOP","checked":false,"opened":false},{"symbol":"SINO","checked":false,"opened":false},{"symbol":"ZKIN","checked":false,"opened":false},{"symbol":"NCTY","checked":false,"opened":false},{"symbol":"SOS","checked":false,"opened":false},{"symbol":"PETZ","checked":false,"opened":false}];
  } */

  public findFlaggedTicker(code :String):IFlaggedTicker
  {
    this.flaggedStocks.forEach(element => {
      if (element.name===code) {
        return element;
      }
    });
    return null;
  };

  public flagTicker(code :String) : void
  {
    var flagged = false;

    const isDate = (element) => element===this.getDateString();

    if (this.flaggedStocks.length > 0) {
    this.flaggedStocks.forEach(element => {
      if (element.name===code) {
        if (element.flagDate.findIndex(isDate)<0) {
          element.flagDate.push(this.getDateString());
        }
        flagged = true ;
      }
    });
  }
    if (!flagged) {
      var t:IFlaggedTicker = {} as IFlaggedTicker;
      t.name=code;
      t.flagDate= Array<String>();
      t.flagDate.push(this.getDateString());
      this.flaggedStocks.push(t);
    }
    this.showFlaggedTicker();
  };


  showFlaggedTicker() :void
  {
    this.flaggedStocks.forEach(element => {
      console.log(element.name+"==>" );
      element.flagDate.forEach(d=>{ console.log("       date:"+d)});
    })
  }

  getDateString() :String
  {
    var date = new Date();
    return this.datePipe.transform(date,"yyyy-MM-dd") ;
  }

  public savePanelStocks(stocks :ITickerOnPanel[] ):Observable<any> 
  {
    const headers = { 'Content-Type': 'application/json'};
    console.log("service posting:",stocks);
    return this.http.post(this._jsonURL,stocks, {headers});
  }


  public loadPanelStocks(): Observable<ITickerOnPanel[]> {
    return this.http.get<ITickerOnPanel[]>(this._jsonURL);
 }

 
}
