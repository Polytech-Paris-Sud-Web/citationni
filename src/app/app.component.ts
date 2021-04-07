import { Component } from '@angular/core';

var researchValue: String = "";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'citationni';
  //researchValue?: String;

  researchVal(val: String){
    researchValue=val
  }
}
