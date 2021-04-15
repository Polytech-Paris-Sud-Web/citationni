import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Quote } from './models/quote';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  private _jwt = ""
  public user: {id:String,fav:Quote[]}

  constructor(
    private http : HttpClient,
  ) {
    this.user={id:"",fav:[{id:"",content:"",author:""}]}
  }


  public init() : Promise<User> {
    return new Promise((resolve) => {
    if(this._jwt === ""){
      this.getConnect().subscribe(rep=>{
        this._jwt=rep.jwt;
        this.user=rep.user;
        resolve(rep.user)
      })
    }else{
      this.getUser().subscribe(rep=>{
        this.user=rep.user;
        resolve(rep.user)
      })
    }
    })
  }

  public getFav(): Quote[] {

    return this.user.fav

  }

  public getConnect(): Observable<{jwt:"", user:{id:"",fav:[{id:"",content:"",author:""}]}}> {
    return this.http.post<{jwt:"", user:{id:"",fav:[{id:"",content:"",author:""}]}}>("https://citationni.herokuapp.com/auth/local",
    {identifier:"kevin.sorin@universite-paris-saclay.fr",password:"passwordSuperComplex"}
    );
  }

  public getUser(): Observable<{jwt:"", user:{id:"",fav:[{id:"",content:"",author:""}]}}> {
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNzVmOTczZDA0Mjg5MWEyNGE3ZTIyNSIsImlhdCI6MTYxODM0NTEyNywiZXhwIjoxNjIwOTM3MTI3fQ.YjqsGuMToQNWmar94bfL9oxX74uBE1rr4FTS-qv01v0'}
    return this.http.get<{jwt:"", user:{id:"",fav:[{id:"",content:"",author:""}]}}>("https://citationni.herokuapp.com/user/me",{headers});
  }
}
