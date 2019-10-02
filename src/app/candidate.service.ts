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
  private _url: string = "http://10.76.0.80:5000/get/Candidates";
  private _url2: string = "http://10.76.0.80:5000/get/Candidate/";
  private _url3: string  = "http://10.76.0.80:5000/get/Forums/";
  
  getcandidates(): Observable<ICandidate[]> {
    return this.http.get<ICandidate[]>(this._url);
  }

  getcandidatesdetail(id): Observable<ICandidate[]> {
    return this.http.get<ICandidate[]>(this._url2+id);
  }

  getforums(id): Observable<IForum[]> {
    return this.http.get<IForum[]>(this._url3+id);
  } 
  
}
