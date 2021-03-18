import { Injectable } from '@angular/core';
import { TickerFlaggedModule } from '../../../../tickerUI/ticker-scan/src/app/core/ticker.flaggedmodel';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TickerService {

  flaggedStocks:Array<TickerFlaggedModule> = new Array<TickerFlaggedModule>();

  constructor(private datePipe: DatePipe) {}


  getCourses()
   {
     return  ["Mr. aA", "Ms. bB" ,"Mss cC"];
   }

 

   getStocks()
   {
     return  [{"id":"SY","checked":false},{"id":"CD","checked":false},{"id":"SPI","checked":false},{"id":"HUDI","checked":false},{"id":"METX","checked":false},{"id":"MFH","checked":false},{"id":"DQ","checked":false},{"id":"SJ","checked":false},{"id":"LEDS","checked":false},{"id":"LITB","checked":false},{"id":"WBAI","checked":false},{"id":"FINV","checked":false},{"id":"ATIF","checked":false},{"id":"OIIM","checked":false},{"id":"GLG","checked":false},{"id":"CSCW","checked":false},{"id":"MLCO","checked":false},{"id":"MSC","checked":false},{"id":"CSIQ","checked":false},{"id":"JKS","checked":false},{"id":"NINE","checked":false},{"id":"KC","checked":false},{"id":"HMI","checked":false},{"id":"HIMX","checked":false},{"id":"YRD","checked":false},{"id":"LXEH","checked":false},{"id":"WAFU","checked":false},{"id":"LOAC","checked":false},{"id":"CJJD","checked":false},{"id":"COE","checked":false},{"id":"RLX","checked":false},{"id":"CNR","checked":false},{"id":"EH","checked":false},{"id":"IMAB","checked":false},{"id":"FENG","checked":false},{"id":"SIMO","checked":false},{"id":"NTES","checked":false},{"id":"BEDU","checked":false},{"id":"GSX","checked":false},{"id":"DAO","checked":false},{"id":"PUYI","checked":false},{"id":"UMC","checked":false},{"id":"NFH","checked":false},{"id":"JD","checked":false},{"id":"GSUM","checked":false},{"id":"FTNT","checked":false},{"id":"HLG","checked":false},{"id":"PLAG","checked":false},{"id":"REDU","checked":false},{"id":"GDS","checked":false},{"id":"IDEX","checked":false},{"id":"RUHN","checked":false},{"id":"IQ","checked":false},{"id":"NIU","checked":false},{"id":"BRLIU","checked":false},{"id":"KBSF","checked":false},{"id":"DL","checked":false},{"id":"GRNV","checked":false},{"id":"HKIB","checked":false},{"id":"ZLAB","checked":false},{"id":"YY","checked":false},{"id":"PDD","checked":false},{"id":"QTT","checked":false},{"id":"DNK","checked":false},{"id":"NVFY","checked":false},{"id":"CNF","checked":false},{"id":"IH","checked":false},{"id":"LX","checked":false},{"id":"FEDU","checked":false},{"id":"SINA","checked":false},{"id":"TSM","checked":false},{"id":"CBPO","checked":false},{"id":"AGMH","checked":false},{"id":"ASX","checked":false},{"id":"HTHT","checked":false},{"id":"CBAT","checked":false},{"id":"TAL","checked":false},{"id":"AACG","checked":false},{"id":"DSWL","checked":false},{"id":"UK","checked":false},{"id":"TCOM","checked":false},{"id":"GTEC","checked":false},{"id":"CREG","checked":false},{"id":"QH","checked":false},{"id":"EDU","checked":false},{"id":"CAF","checked":false},{"id":"GHG","checked":false},{"id":"YUMC","checked":false},{"id":"NTP","checked":false},{"id":"NEW","checked":false},{"id":"SOGO","checked":false},{"id":"BYSI","checked":false},{"id":"OSN","checked":false},{"id":"HOLI","checked":false},{"id":"KWEB","checked":false},{"id":"KNDI","checked":false},{"id":"CTK","checked":false},{"id":"FUTU","checked":false},{"id":"ZGYH","checked":false},{"id":"SEED","checked":false},{"id":"BNR","checked":false},{"id":"ANPC","checked":false},{"id":"OCFT","checked":false},{"id":"ZTO","checked":false},{"id":"SFUN","checked":false},{"id":"LEJU","checked":false},{"id":"BABA","checked":false},{"id":"VNET","checked":false},{"id":"CMCM","checked":false},{"id":"ASHR","checked":false},{"id":"LEGN","checked":false},{"id":"TME","checked":false},{"id":"CCAC","checked":false},{"id":"SDH","checked":false},{"id":"CHT","checked":false},{"id":"JOBS","checked":false},{"id":"TLC","checked":false},{"id":"IMOS","checked":false},{"id":"CAAS","checked":false},{"id":"ADAG","checked":false},{"id":"JP","checked":false},{"id":"BEKE","checked":false},{"id":"TEDU","checked":false},{"id":"PTR","checked":false},{"id":"CQQQ","checked":false},{"id":"CCRC","checked":false},{"id":"CYD","checked":false},{"id":"CCNC","checked":false},{"id":"QFIN","checked":false},{"id":"FXI","checked":false},{"id":"CXDC","checked":false},{"id":"SONO","checked":false},{"id":"LAIX","checked":false},{"id":"MNSO","checked":false},{"id":"SOL","checked":false},{"id":"LI","checked":false},{"id":"ANTE","checked":false},{"id":"LFC","checked":false},{"id":"MOMO","checked":false},{"id":"PME","checked":false},{"id":"HIHO","checked":false},{"id":"LU","checked":false},{"id":"ZNH","checked":false},{"id":"ICLK","checked":false},{"id":"NIO","checked":false},{"id":"CEA","checked":false},{"id":"EZGO","checked":false},{"id":"RCON","checked":false},{"id":"GIGM","checked":false},{"id":"APWC","checked":false},{"id":"WEI","checked":false},{"id":"XIN","checked":false},{"id":"SECO","checked":false},{"id":"MGI","checked":false},{"id":"NEWA","checked":false},{"id":"TC","checked":false},{"id":"AIH","checked":false},{"id":"UXIN","checked":false},{"id":"BAOS","checked":false},{"id":"BRY","checked":false},{"id":"ZCMD","checked":false},{"id":"COWN","checked":false},{"id":"SHI","checked":false},{"id":"CCM","checked":false},{"id":"DUO","checked":false},{"id":"ATHM","checked":false},{"id":"CPHI","checked":false},{"id":"CEO","checked":false},{"id":"HUSN","checked":false},{"id":"HAPP","checked":false},{"id":"VIPS","checked":false},{"id":"BGNE","checked":false},{"id":"BZUN","checked":false},{"id":"YGMZ","checked":false},{"id":"YJ","checked":false},{"id":"SOHU","checked":false},{"id":"YSG","checked":false},{"id":"DADA","checked":false},{"id":"UCL","checked":false},{"id":"AMBO","checked":false},{"id":"XNET","checked":false},{"id":"PBTS","checked":false},{"id":"GRCL","checked":false},{"id":"API","checked":false},{"id":"AMC","checked":false},{"id":"MTC","checked":false},{"id":"HNP","checked":false},{"id":"PLIN","checked":false},{"id":"ACH","checked":false},{"id":"CAN","checked":false},{"id":"MDJH","checked":false},{"id":"NBAC","checked":false},{"id":"HCM","checked":false},{"id":"CIH","checked":false},{"id":"FTFT","checked":false},{"id":"BRQS","checked":false},{"id":"XPEV","checked":false},{"id":"BIDU","checked":false},{"id":"TIGR","checked":false},{"id":"SNP","checked":false},{"id":"APM","checked":false},{"id":"WB","checked":false},{"id":"BIMI","checked":false},{"id":"ZEPP","checked":false},{"id":"DTSS","checked":false},{"id":"ITP","checked":false},{"id":"YI","checked":false},{"id":"DOYU","checked":false},{"id":"BTBT","checked":false},{"id":"KUKE","checked":false},{"id":"TANH","checked":false},{"id":"CNET","checked":false},{"id":"WIMI","checked":false},{"id":"OCG","checked":false},{"id":"BILI","checked":false},{"id":"NOAH","checked":false},{"id":"YALA","checked":false},{"id":"XYF","checked":false},{"id":"BEST","checked":false},{"id":"JG","checked":false},{"id":"RYB","checked":false},{"id":"ONE","checked":false},{"id":"GURE","checked":false},{"id":"WNW","checked":false},{"id":"BNSO","checked":false},{"id":"TIRX","checked":false},{"id":"CLWT","checked":false},{"id":"UTSI","checked":false},{"id":"JRJC","checked":false},{"id":"YQ","checked":false},{"id":"QD","checked":false},{"id":"LLIT","checked":false},{"id":"RETO","checked":false},{"id":"HUYA","checked":false},{"id":"EDTK","checked":false},{"id":"GTH","checked":false},{"id":"QLI","checked":false},{"id":"AEHL","checked":false},{"id":"QK","checked":false},{"id":"FANH","checked":false},{"id":"EVK","checked":false},{"id":"TOUR","checked":false},{"id":"HUIZ","checked":false},{"id":"SVM","checked":false},{"id":"BQ","checked":false},{"id":"CO","checked":false},{"id":"IFMK","checked":false},{"id":"OPRA","checked":false},{"id":"NISN","checked":false},{"id":"GSMG","checked":false},{"id":"AIHS","checked":false},{"id":"BLCT","checked":false},{"id":"RENN","checked":false},{"id":"SGOC","checked":false},{"id":"TKAT","checked":false},{"id":"BHAT","checked":false},{"id":"TYHT","checked":false},{"id":"EBON","checked":false},{"id":"CHNR","checked":false},{"id":"VIOT","checked":false},{"id":"SXTC","checked":false},{"id":"DXF","checked":false},{"id":"STG","checked":false},{"id":"JFU","checked":false},{"id":"MOHO","checked":false},{"id":"CGA","checked":false},{"id":"KXIN","checked":false},{"id":"HGSH","checked":false},{"id":"JFIN","checked":false},{"id":"CNEY","checked":false},{"id":"EGO","checked":false},{"id":"LYL","checked":false},{"id":"DOGZ","checked":false},{"id":"PT","checked":false},{"id":"MOGU","checked":false},{"id":"RAAS","checked":false},{"id":"PHCF","checked":false},{"id":"HX","checked":false},{"id":"MKD","checked":false},{"id":"CANG","checked":false},{"id":"CLPS","checked":false},{"id":"LIZI","checked":false},{"id":"JT","checked":false},{"id":"FFHL","checked":false},{"id":"FAMI","checked":false},{"id":"KRKR","checked":false},{"id":"MYT","checked":false},{"id":"MOXC","checked":false},{"id":"CLEU","checked":false},{"id":"LKCO","checked":false},{"id":"TAOP","checked":false},{"id":"SINO","checked":false},{"id":"ZKIN","checked":false},{"id":"NCTY","checked":false},{"id":"SOS","checked":false},{"id":"PETZ","checked":false}];
  }

  getStocks2()
  {
    return  [{"id":"SY","checked":false,"opened":false},{"id":"CD","checked":false,"opened":false},{"id":"SPI","checked":false,"opened":false},{"id":"HUDI","checked":false,"opened":false},{"id":"METX","checked":false,"opened":false},{"id":"MFH","checked":false,"opened":false},{"id":"DQ","checked":false,"opened":false},{"id":"SJ","checked":false,"opened":false},{"id":"LEDS","checked":false,"opened":false},{"id":"LITB","checked":false,"opened":false},{"id":"WBAI","checked":false,"opened":false},{"id":"FINV","checked":false,"opened":false},{"id":"ATIF","checked":false,"opened":false},{"id":"OIIM","checked":false,"opened":false},{"id":"GLG","checked":false,"opened":false},{"id":"CSCW","checked":false,"opened":false},{"id":"MLCO","checked":false,"opened":false},{"id":"MSC","checked":false,"opened":false},{"id":"CSIQ","checked":false,"opened":false},{"id":"JKS","checked":false,"opened":false},{"id":"NINE","checked":false,"opened":false},{"id":"KC","checked":false,"opened":false},{"id":"HMI","checked":false,"opened":false},{"id":"HIMX","checked":false,"opened":false},{"id":"YRD","checked":false,"opened":false},{"id":"LXEH","checked":false,"opened":false},{"id":"WAFU","checked":false,"opened":false},{"id":"LOAC","checked":false,"opened":false},{"id":"CJJD","checked":false,"opened":false},{"id":"COE","checked":false,"opened":false},{"id":"RLX","checked":false,"opened":false},{"id":"CNR","checked":false,"opened":false},{"id":"EH","checked":false,"opened":false},{"id":"IMAB","checked":false,"opened":false},{"id":"FENG","checked":false,"opened":false},{"id":"SIMO","checked":false,"opened":false},{"id":"NTES","checked":false,"opened":false},{"id":"BEDU","checked":false,"opened":false},{"id":"GSX","checked":false,"opened":false},{"id":"DAO","checked":false,"opened":false},{"id":"PUYI","checked":false,"opened":false},{"id":"UMC","checked":false,"opened":false},{"id":"NFH","checked":false,"opened":false},{"id":"JD","checked":false,"opened":false},{"id":"GSUM","checked":false,"opened":false},{"id":"FTNT","checked":false,"opened":false},{"id":"HLG","checked":false,"opened":false},{"id":"PLAG","checked":false,"opened":false},{"id":"REDU","checked":false,"opened":false},{"id":"GDS","checked":false,"opened":false},{"id":"IDEX","checked":false,"opened":false},{"id":"RUHN","checked":false,"opened":false},{"id":"IQ","checked":false,"opened":false},{"id":"NIU","checked":false,"opened":false},{"id":"BRLIU","checked":false,"opened":false},{"id":"KBSF","checked":false,"opened":false},{"id":"DL","checked":false,"opened":false},{"id":"GRNV","checked":false,"opened":false},{"id":"HKIB","checked":false,"opened":false},{"id":"ZLAB","checked":false,"opened":false},{"id":"YY","checked":false,"opened":false},{"id":"PDD","checked":false,"opened":false},{"id":"QTT","checked":false,"opened":false},{"id":"DNK","checked":false,"opened":false},{"id":"NVFY","checked":false,"opened":false},{"id":"CNF","checked":false,"opened":false},{"id":"IH","checked":false,"opened":false},{"id":"LX","checked":false,"opened":false},{"id":"FEDU","checked":false,"opened":false},{"id":"SINA","checked":false,"opened":false},{"id":"TSM","checked":false,"opened":false},{"id":"CBPO","checked":false,"opened":false},{"id":"AGMH","checked":false,"opened":false},{"id":"ASX","checked":false,"opened":false},{"id":"HTHT","checked":false,"opened":false},{"id":"CBAT","checked":false,"opened":false},{"id":"TAL","checked":false,"opened":false},{"id":"AACG","checked":false,"opened":false},{"id":"DSWL","checked":false,"opened":false},{"id":"UK","checked":false,"opened":false},{"id":"TCOM","checked":false,"opened":false},{"id":"GTEC","checked":false,"opened":false},{"id":"CREG","checked":false,"opened":false},{"id":"QH","checked":false,"opened":false},{"id":"EDU","checked":false,"opened":false},{"id":"CAF","checked":false,"opened":false},{"id":"GHG","checked":false,"opened":false},{"id":"YUMC","checked":false,"opened":false},{"id":"NTP","checked":false,"opened":false},{"id":"NEW","checked":false,"opened":false},{"id":"SOGO","checked":false,"opened":false},{"id":"BYSI","checked":false,"opened":false},{"id":"OSN","checked":false,"opened":false},{"id":"HOLI","checked":false,"opened":false},{"id":"KWEB","checked":false,"opened":false},{"id":"KNDI","checked":false,"opened":false},{"id":"CTK","checked":false,"opened":false},{"id":"FUTU","checked":false,"opened":false},{"id":"ZGYH","checked":false,"opened":false},{"id":"SEED","checked":false,"opened":false},{"id":"BNR","checked":false,"opened":false},{"id":"ANPC","checked":false,"opened":false},{"id":"OCFT","checked":false,"opened":false},{"id":"ZTO","checked":false,"opened":false},{"id":"SFUN","checked":false,"opened":false},{"id":"LEJU","checked":false,"opened":false},{"id":"BABA","checked":false,"opened":false},{"id":"VNET","checked":false,"opened":false},{"id":"CMCM","checked":false,"opened":false},{"id":"ASHR","checked":false,"opened":false},{"id":"LEGN","checked":false,"opened":false},{"id":"TME","checked":false,"opened":false},{"id":"CCAC","checked":false,"opened":false},{"id":"SDH","checked":false,"opened":false},{"id":"CHT","checked":false,"opened":false},{"id":"JOBS","checked":false,"opened":false},{"id":"TLC","checked":false,"opened":false},{"id":"IMOS","checked":false,"opened":false},{"id":"CAAS","checked":false,"opened":false},{"id":"ADAG","checked":false,"opened":false},{"id":"JP","checked":false,"opened":false},{"id":"BEKE","checked":false,"opened":false},{"id":"TEDU","checked":false,"opened":false},{"id":"PTR","checked":false,"opened":false},{"id":"CQQQ","checked":false,"opened":false},{"id":"CCRC","checked":false,"opened":false},{"id":"CYD","checked":false,"opened":false},{"id":"CCNC","checked":false,"opened":false},{"id":"QFIN","checked":false,"opened":false},{"id":"FXI","checked":false,"opened":false},{"id":"CXDC","checked":false,"opened":false},{"id":"SONO","checked":false,"opened":false},{"id":"LAIX","checked":false,"opened":false},{"id":"MNSO","checked":false,"opened":false},{"id":"SOL","checked":false,"opened":false},{"id":"LI","checked":false,"opened":false},{"id":"ANTE","checked":false,"opened":false},{"id":"LFC","checked":false,"opened":false},{"id":"MOMO","checked":false,"opened":false},{"id":"PME","checked":false,"opened":false},{"id":"HIHO","checked":false,"opened":false},{"id":"LU","checked":false,"opened":false},{"id":"ZNH","checked":false,"opened":false},{"id":"ICLK","checked":false,"opened":false},{"id":"NIO","checked":false,"opened":false},{"id":"CEA","checked":false,"opened":false},{"id":"EZGO","checked":false,"opened":false},{"id":"RCON","checked":false,"opened":false},{"id":"GIGM","checked":false,"opened":false},{"id":"APWC","checked":false,"opened":false},{"id":"WEI","checked":false,"opened":false},{"id":"XIN","checked":false,"opened":false},{"id":"SECO","checked":false,"opened":false},{"id":"MGI","checked":false,"opened":false},{"id":"NEWA","checked":false,"opened":false},{"id":"TC","checked":false,"opened":false},{"id":"AIH","checked":false,"opened":false},{"id":"UXIN","checked":false,"opened":false},{"id":"BAOS","checked":false,"opened":false},{"id":"BRY","checked":false,"opened":false},{"id":"ZCMD","checked":false,"opened":false},{"id":"COWN","checked":false,"opened":false},{"id":"SHI","checked":false,"opened":false},{"id":"CCM","checked":false,"opened":false},{"id":"DUO","checked":false,"opened":false},{"id":"ATHM","checked":false,"opened":false},{"id":"CPHI","checked":false,"opened":false},{"id":"CEO","checked":false,"opened":false},{"id":"HUSN","checked":false,"opened":false},{"id":"HAPP","checked":false,"opened":false},{"id":"VIPS","checked":false,"opened":false},{"id":"BGNE","checked":false,"opened":false},{"id":"BZUN","checked":false,"opened":false},{"id":"YGMZ","checked":false,"opened":false},{"id":"YJ","checked":false,"opened":false},{"id":"SOHU","checked":false,"opened":false},{"id":"YSG","checked":false,"opened":false},{"id":"DADA","checked":false,"opened":false},{"id":"UCL","checked":false,"opened":false},{"id":"AMBO","checked":false,"opened":false},{"id":"XNET","checked":false,"opened":false},{"id":"PBTS","checked":false,"opened":false},{"id":"GRCL","checked":false,"opened":false},{"id":"API","checked":false,"opened":false},{"id":"AMC","checked":false,"opened":false},{"id":"MTC","checked":false,"opened":false},{"id":"HNP","checked":false,"opened":false},{"id":"PLIN","checked":false,"opened":false},{"id":"ACH","checked":false,"opened":false},{"id":"CAN","checked":false,"opened":false},{"id":"MDJH","checked":false,"opened":false},{"id":"NBAC","checked":false,"opened":false},{"id":"HCM","checked":false,"opened":false},{"id":"CIH","checked":false,"opened":false},{"id":"FTFT","checked":false,"opened":false},{"id":"BRQS","checked":false,"opened":false},{"id":"XPEV","checked":false,"opened":false},{"id":"BIDU","checked":false,"opened":false},{"id":"TIGR","checked":false,"opened":false},{"id":"SNP","checked":false,"opened":false},{"id":"APM","checked":false,"opened":false},{"id":"WB","checked":false,"opened":false},{"id":"BIMI","checked":false,"opened":false},{"id":"ZEPP","checked":false,"opened":false},{"id":"DTSS","checked":false,"opened":false},{"id":"ITP","checked":false,"opened":false},{"id":"YI","checked":false,"opened":false},{"id":"DOYU","checked":false,"opened":false},{"id":"BTBT","checked":false,"opened":false},{"id":"KUKE","checked":false,"opened":false},{"id":"TANH","checked":false,"opened":false},{"id":"CNET","checked":false,"opened":false},{"id":"WIMI","checked":false,"opened":false},{"id":"OCG","checked":false,"opened":false},{"id":"BILI","checked":false,"opened":false},{"id":"NOAH","checked":false,"opened":false},{"id":"YALA","checked":false,"opened":false},{"id":"XYF","checked":false,"opened":false},{"id":"BEST","checked":false,"opened":false},{"id":"JG","checked":false,"opened":false},{"id":"RYB","checked":false,"opened":false},{"id":"ONE","checked":false,"opened":false},{"id":"GURE","checked":false,"opened":false},{"id":"WNW","checked":false,"opened":false},{"id":"BNSO","checked":false,"opened":false},{"id":"TIRX","checked":false,"opened":false},{"id":"CLWT","checked":false,"opened":false},{"id":"UTSI","checked":false,"opened":false},{"id":"JRJC","checked":false,"opened":false},{"id":"YQ","checked":false,"opened":false},{"id":"QD","checked":false,"opened":false},{"id":"LLIT","checked":false,"opened":false},{"id":"RETO","checked":false,"opened":false},{"id":"HUYA","checked":false,"opened":false},{"id":"EDTK","checked":false,"opened":false},{"id":"GTH","checked":false,"opened":false},{"id":"QLI","checked":false,"opened":false},{"id":"AEHL","checked":false,"opened":false},{"id":"QK","checked":false,"opened":false},{"id":"FANH","checked":false,"opened":false},{"id":"EVK","checked":false,"opened":false},{"id":"TOUR","checked":false,"opened":false},{"id":"HUIZ","checked":false,"opened":false},{"id":"SVM","checked":false,"opened":false},{"id":"BQ","checked":false,"opened":false},{"id":"CO","checked":false,"opened":false},{"id":"IFMK","checked":false,"opened":false},{"id":"OPRA","checked":false,"opened":false},{"id":"NISN","checked":false,"opened":false},{"id":"GSMG","checked":false,"opened":false},{"id":"AIHS","checked":false,"opened":false},{"id":"BLCT","checked":false,"opened":false},{"id":"RENN","checked":false,"opened":false},{"id":"SGOC","checked":false,"opened":false},{"id":"TKAT","checked":false,"opened":false},{"id":"BHAT","checked":false,"opened":false},{"id":"TYHT","checked":false,"opened":false},{"id":"EBON","checked":false,"opened":false},{"id":"CHNR","checked":false,"opened":false},{"id":"VIOT","checked":false,"opened":false},{"id":"SXTC","checked":false,"opened":false},{"id":"DXF","checked":false,"opened":false},{"id":"STG","checked":false,"opened":false},{"id":"JFU","checked":false,"opened":false},{"id":"MOHO","checked":false,"opened":false},{"id":"CGA","checked":false,"opened":false},{"id":"KXIN","checked":false,"opened":false},{"id":"HGSH","checked":false,"opened":false},{"id":"JFIN","checked":false,"opened":false},{"id":"CNEY","checked":false,"opened":false},{"id":"EGO","checked":false,"opened":false},{"id":"LYL","checked":false,"opened":false},{"id":"DOGZ","checked":false,"opened":false},{"id":"PT","checked":false,"opened":false},{"id":"MOGU","checked":false,"opened":false},{"id":"RAAS","checked":false,"opened":false},{"id":"PHCF","checked":false,"opened":false},{"id":"HX","checked":false,"opened":false},{"id":"MKD","checked":false,"opened":false},{"id":"CANG","checked":false,"opened":false},{"id":"CLPS","checked":false,"opened":false},{"id":"LIZI","checked":false,"opened":false},{"id":"JT","checked":false,"opened":false},{"id":"FFHL","checked":false,"opened":false},{"id":"FAMI","checked":false,"opened":false},{"id":"KRKR","checked":false,"opened":false},{"id":"MYT","checked":false,"opened":false},{"id":"MOXC","checked":false,"opened":false},{"id":"CLEU","checked":false,"opened":false},{"id":"LKCO","checked":false,"opened":false},{"id":"TAOP","checked":false,"opened":false},{"id":"SINO","checked":false,"opened":false},{"id":"ZKIN","checked":false,"opened":false},{"id":"NCTY","checked":false,"opened":false},{"id":"SOS","checked":false,"opened":false},{"id":"PETZ","checked":false,"opened":false}];
  }

  public findFlaggedTicker(code :String):TickerFlaggedModule
  {
    this.flaggedStocks.forEach(element => {
      if (element.name===code) {
        return element;
      }
    });
    return null;
  };

  public flagTicker(code :String)
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
      var t = new TickerFlaggedModule();
      t.name=code;
      t.flagDate= Array<String>();
      t.flagDate.push(this.getDateString());
      this.flaggedStocks.push(t);
    }
    this.showFlaggedTicker();
  };


  showFlaggedTicker()
  {
    this.flaggedStocks.forEach(element => {
      console.log(element.name+"==>" );
      element.flagDate.forEach(d=>{ console.log("       date:"+d)});
    })
  }

  getDateString()
  {
    var date = new Date();
    return this.datePipe.transform(date,"yyyy-MM-dd") ;
  }
}
