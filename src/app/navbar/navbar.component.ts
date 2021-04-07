import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  iconStarBorderType?: String;
  favDestination?: String;
  researchValue?: String;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    if(this.router.url=="/")this.iconStarBorderType = "star";
    else this.iconStarBorderType = "home";
    this.researchValue = "";
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
    console.log(this.researchValue)
  }

}