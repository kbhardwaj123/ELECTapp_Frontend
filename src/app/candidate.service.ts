import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICandidate } from './candidate';
import { Observable } from 'rxjs';
import { IForum } from './forum';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }
  private _url: string = "/assets/data/candidates.json";
  private _url2: string = "/assets/data/candidate.json";
  private _url3: string  = "http://10.76.0.80:5000/get/Forums/";
  // getcandidates() {
  //   return [
  //     {
  //       "ID": 0,
  //       "person_id": 0,
  //       "person_name": "Dhrumil",
  //       "post": "Hotel Affairs",
  //       "manifestos": [
  //         "asrefa wergvr aver vb stbreasredavbarav stdbe ",
  //         "awerf earv aeaewae ea ea ae54vae ea aeeaq54gea ", 
  //         "wesfaw4 aw ae4gvae eaW AEAEBVA EVBR RZAESV S5ERBV EBREVB ESR",
  //         "rsfarv aervaerv aerv aer v aertgbae rea aebaebae a aer ae"
  //       ],
  //       "achievement": [
  //         "aerfv aervevea tdb srtf std fsbsrfbsr bsrtb srrst ",
  //         "aedrtvaeweerv ertaverstvservrtebv  v bv rstbsrtrts rbttrrsfb rst  ertgetgt",
  //         "ardege seabgegbs rt rtrssrtsr rtssrtsagb vsertabgesrtbs",
  //         "aergaer bvaeaes5rgbeartsb rteasb etrerb trefbg easrbft de btdts tb t",
  //         "sedtrg sbtdfsbtrsbtsrf b trsg bgt trsfd btrbtrsbssbh  srthbsrt",
  //         "sedrgr sabtrstb srttsreb rdtsbn fbt xfdt btdfbftxd  htrdfs"
  //       ],
  //       "info": "earv behjuk beradb uyrea yuera uadr yugredav uyjrae etrsb srteb ret rnsrt tsdty sdfyhn xyf f yfxn dgftnsfyn dtnsryf nrtun etu yruum"
  //     }
  //   ];
  // }
  getcandidates(): Observable<ICandidate[]> {
    return this.http.get<ICandidate[]>(this._url);
  }

  getcandidatesdetail(id): Observable<ICandidate[]> {
    return this.http.get<ICandidate[]>(this._url2);
  }

  getforums(id): Observable<IForum[]> {
    return this.http.get<IForum[]>(this._url3);
  } 
  
}
