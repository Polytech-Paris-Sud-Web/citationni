import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {QuoteAuthor} from '../models/quoteAuthor';
import { FirebaseService } from '../firebase.service'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  iconStarBorderType?: String;
  favDestination?: String;
  researchValue?: String;
  urlImage;

  @Input() 
  quote : QuoteAuthor = {id:"",content:"",author:{id:0,name:"",image:"", desc:""}};
  isFave : Boolean = false;

  @ViewChild("importImage") importImage!: ElementRef;
  

  constructor(
    private _firebaseService: FirebaseService,
  ) {
    if(this.isFave)this.iconStarBorderType = "star";
    else this.iconStarBorderType = "star_border";
    
  }

  ngOnInit(): void {
    this.getPictureURL()
  }
  
  swapFav() {
    if(this.iconStarBorderType==="star"){
      this.iconStarBorderType = "star_border"
      this.isFave = false
    }else{
      this.iconStarBorderType = "star"
      this.isFave = true
    }
  }

  getPictureURL() {
    // Si l'utilisateur à bien une photo de profile
    if (this.quote.author.image != null) {

      // On la récupère sur Firebase storage et on l'affecte à la div
      this._firebaseService.getImageUrl(this.quote.author.image).then((url) => {
        this.urlImage = `url(${url})`;
      })
    } else { // Sinon on met une image par défaut
      this.urlImage = `url(../assets/img/phi.jpg)`;
    }
  }
}
