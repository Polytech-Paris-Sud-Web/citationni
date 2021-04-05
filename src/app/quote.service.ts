import { Injectable } from '@angular/core';
import {Quote} from "./models/quote";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

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

}
