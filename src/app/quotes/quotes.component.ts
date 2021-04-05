import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

import { Quote } from "../models/quote";
import { QuoteService } from "../quote.service";


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quotes?: Quote[];
  private _quoteSub?: Subscription;

  constructor(private quoteService: QuoteService) {
  }


  ngOnInit(): void {
    this._quoteSub = this.quoteService.getQuotes().subscribe(quotes => this.quotes = quotes);
  }


}
