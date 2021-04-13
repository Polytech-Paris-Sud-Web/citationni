import { Component, OnInit } from '@angular/core';
import { Observable, from, Subscription, forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Quote } from "../../models/quote";
import { QuoteService } from "../../quote.service";

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {

  favs?: [Quote[]];
  private _favSub?: Subscription;

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit(): void {
    this.quoteService.getFav().then(fav =>
            from(fav).pipe(mergeMap(id => forkJoin(this.quoteService.getQuotes(<string>id))))
                  .subscribe(quotes =>
                        this.favs = quotes)
            );
  }

}
