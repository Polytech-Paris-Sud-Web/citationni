import { Injectable } from '@angular/core';
import {Quote} from "./models/quote";
import {User} from "./models/user";
import {HttpClient} from "@angular/common/http";
import { Observable, pipe, forkJoin } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http : HttpClient) { }

  public getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>("http://localhost:3000/quotes");
    /*.pipe(
      flatMap(_ => this.http.get<QuoteAutor>("http://localhost:3000/authors/") +quoteauthor,
      map())
    )*/
  }

    public getFav(): Observable<Quote[]> {
      return forkJoin(
        this.http.get<User[]>("http://localhost:3000/user/" + "Renan"),
        this.getQuotes()
      ).pipe(
        map(([user, quotes]) => quotes.filter(quote => quote.id === 4)
        )
      )
    }
}
