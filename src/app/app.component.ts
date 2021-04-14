import { Component } from '@angular/core';
import { ConnectService } from './connect.service';

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
  constructor(
    private connectService: ConnectService,
  ) {
  this.connectService.init()
  }
}
