import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Quote } from "../models/quote";
import { Author } from "../models/author";
import { QuoteAuthor } from "../models/quoteAuthor";
import { QuoteService } from "../quote.service";
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
  isFav: Boolean[] = [];
  private _quoteAuthorSub?: Subscription;
  private _authorSub?: Subscription;
  researchValue: String;

  constructor(
    private quoteService: QuoteService,
    private searchService: SearchService,
  ) { 
    this.researchValue = ""
    this.searchService.researchWord.subscribe(x => { this.researchValue = x })
   
  }


  ngOnInit(): void { 

    this._quoteAuthorSub = this.quoteService.getQuotes().subscribe(rep => {
      this.quoteAuthor=rep
    })

    this.quoteService.getFav().subscribe(rep=> {
      let isFav=false;
      this.quoteAuthor.find(q => {
        rep.map(r=>{
          if(!isFav && r.id===q.id){isFav=true}
        })
      })
      this.isFav.push(isFav)
    })
    
  }







  /*      this.quotes.forEach(quote => {
  
      );*/ 

}
