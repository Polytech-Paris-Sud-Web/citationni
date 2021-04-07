import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

import { Quote } from "../../models/quote";
import { QuoteService } from "../../quote.service";

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {

  favs?: Quote[];
  private _quoteSub?: Subscription;

  constructor(private quoteService: QuoteService) {
  }


  ngOnInit(): void {
    this._quoteSub = this.quoteService.getFav().subscribe(quotes => this.favs = quotes);
  }

}
