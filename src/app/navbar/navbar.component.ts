import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  iconStarBorderType?: String;
  favDestination?: String;
  researchValue;
  userName: String;
  loged: boolean;
  inputShow: boolean;

  @Output() 
  research : EventEmitter<String> = new EventEmitter();

  constructor(
    private router: Router,
    private searchService: SearchService
  ) {
    this.researchValue = ""; 
    this.userName = "kévin";
    this.loged = true;
    this.inputShow = false;
  }

  ngOnInit(): void {
    if(this.router.url=="/")this.iconStarBorderType = "star";
    else this.iconStarBorderType = "home";
    
  }

  swapFav() {
    console.log(this.router.url)
    if(this.iconStarBorderType==="star"){
      this.iconStarBorderType = "home"
      this.router.navigateByUrl("/fav")
    }else{
      this.iconStarBorderType = "star"
      this.router.navigateByUrl("/")
    }
  }

  actionResearch() {
    this.searchService.onResearch(this.researchValue)
    this.research.emit(this.researchValue);
  }

  logingInputShow(){
    this.inputShow=!this.inputShow
  }

  actionConnect(){
    if(this.userName!==""){
      this.loged = true
      this.inputShow = false
    }
  }

}