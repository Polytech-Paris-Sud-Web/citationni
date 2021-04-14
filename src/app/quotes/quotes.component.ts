import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

import { Quote } from "../models/quote";
import { Author } from "../models/author";
import { QuoteAuthor } from "../models/quoteAuthor";
import { QuoteService } from "../quote.service";
import { AuthorService } from "../author.service";
import { AppComponent } from '../app.component';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quotes?: Quote[]; 
  authors?: Author[];
  tmpAuthor?: Author;
  quoteAuthor: QuoteAuthor[] = [];
  private _quoteAuthorSub?: Subscription;
  private _authorSub?: Subscription;
  researchValue: String;

  constructor(
    private quoteService: QuoteService,
    private authorService: AuthorService,
    private appComponent: AppComponent,
    private searchService: SearchService,
  ) { 
    this.researchValue = ""
    this.searchService.researchWord.subscribe(x => { this.researchValue = x })
    console.log(appComponent.researchVal)
   
  }


  ngOnInit(): void { 
    /*this._quoteSub = this.quoteService.getQuotes().subscribe(quotes => {
      this.quotes = quotes
      this._authorSub = this.authorService.getAuthors().subscribe(authors => {
        this.authors = authors
        quotes.forEach(quote => {
          this.tmpAuthor = authors.find(author => author.name === quote.author)
          this.quoteAuthor.push({
            id : quote.id,
            content : quote.content,
            is_favori : quote.is_favori,
            author : this.tmpAuthor ? this.tmpAuthor : { id : 0, name : "unknow", desc : "unknow", image : "unknow" }
          })
        });
         
      })
    });*/
    this._quoteAuthorSub = this.quoteService.getQuotes().subscribe(rep => {
      this.quoteAuthor=[rep[0],rep[1]]
      console.log(this.quoteAuthor)
    })
  }







  /*      this.quotes.forEach(quote => {
  
      );*/ 

}
