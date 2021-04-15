import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../models/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  @Input() 
  author? : Author;

  constructor(
  ) {}

  ngOnInit(): void {
  }
  
}
