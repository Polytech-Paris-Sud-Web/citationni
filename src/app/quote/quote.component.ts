import { Component, OnInit, Input } from '@angular/core';
import {Quote} from '../models/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  iconStarBorderType?: String;
  favDestination?: String;
  researchValue?: String;

  @Input() 
  quote : Quote = { id:0,content:"",author:"",is_favori:false};

  constructor() {
    if(this.quote?.is_favori)this.iconStarBorderType = "star";
    else this.iconStarBorderType = "star_border";
  }

  ngOnInit(): void {
  }
  
  swapFav() {
    if(this.iconStarBorderType==="star"){
      this.iconStarBorderType = "star_border"
      this.quote.is_favori = false
    }else{
      this.iconStarBorderType = "star"
      this.quote.is_favori = true
    }
  }
}
