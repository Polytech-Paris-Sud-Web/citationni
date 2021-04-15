import { Injectable } from '@angular/core';
import { Quote } from "./models/quote";
import { QuoteAuthor } from "./models/quoteAuthor";
import { User } from "./models/user";
import { HttpClient } from "@angular/common/http";
import { Observable, pipe, forkJoin, from } from 'rxjs';
import { map, filter, shareReplay, pluck, toArray, mergeMap, take, switchMap } from 'rxjs/operators';
import { ConnectService } from "./connect.service";

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private _quote?: Observable<Quote>
  private _quoteAuthor?: Observable<QuoteAuthor>

  constructor(
    private http : HttpClient,
    private connectService : ConnectService
  ) { }

  public getQuotes(): Observable<QuoteAuthor[]> {
    return this.http.get<QuoteAuthor[]>("https://citationni.herokuapp.com/quotes").pipe(shareReplay(1));
  }

  public getFav(): Observable<QuoteAuthor[]> {
    return this.http.get<QuoteAuthor[]>("https://citationni.herokuapp.com/quotes").pipe(shareReplay(1))
    .pipe(
      map(q => q.filter(quote =>{ 
        let isFav=false
        this.connectService.getFav().map(fav => {if(!isFav){
          isFav=(fav.id===quote.id)
        }})
        return isFav
      }) ))
    
  }
}

