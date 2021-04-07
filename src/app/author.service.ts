import { Injectable } from '@angular/core';
import { Author } from "./models/author";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http : HttpClient) { }

  public getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>("http://localhost:3000/authors/");
  }

  public getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>("http://localhost:3000/authors/"+id);
  }

}