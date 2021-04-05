import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../models/author';
//import { AuthorService } from '../author.service'

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  @Input() 
  author? : Author;

  constructor(
    //private authorService: AuthorService,
  ) {

  }

  ngOnInit(): void {
    /*this.authorService.getAuthors()
    .subscribe(author => {
      
    })*/
  }
  
}
