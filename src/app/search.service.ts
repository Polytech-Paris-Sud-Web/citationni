import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public researchWord: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() {}

  public onResearch(word: string){
    this.researchWord.next(word);
  }
}
