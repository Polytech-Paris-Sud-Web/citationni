import { Component, OnInit } from '@angular/core';
import { Observable, from, Subscription, forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { SearchService } from '../../search.service';

import { Quote } from "../../models/quote";
import { QuoteAuthor } from "../../models/quoteAuthor"
import { QuoteService } from "../../quote.service";


@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {

  favs?: QuoteAuthor[];
  private _favSub?: Subscription;
  researchValue: String;

  constructor(
    private quoteService: QuoteService,
    private searchService: SearchService
    ) {
    this.researchValue = ""
    this.searchService.researchWord.subscribe(x => { this.researchValue = x })
  }

  ngOnInit(): void {
    this.quoteService.getFav().subscribe(quote => this.favs=quote);
           /* from(fav).pipe(mergeMap(id => forkJoin(this.quoteService.getQuotes(<string>id))))
                  .subscribe(quotes =>
                        this.favs = quotes)
            );*/
           
  }

}
