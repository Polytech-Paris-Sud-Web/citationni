import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  private _jwt = ""
  public user = {}


  constructor(
    private http : HttpClient
  ) {
  }

  public init(): any {
    if(this._jwt === ""){
      this.getConnect().subscribe(rep=>{
        this._jwt=rep.jwp;
        this.user=rep.user;
        return this.user
      })
    }else{
      this.getUser().subscribe(rep=>{
        this.user=rep.user;
        return this.user
      })
    }
  }

  public getFav(): any {
    return this.init().fav
  }

  public getConnect(): Observable<any[]> {
    return this.http.post<any[]>("https://citationni.herokuapp.com/auth/local",
    {identifier:"kevin.sorin@universite-paris-saclay.fr",password:"passwordSuperComplex"}
    );
  }

  public getUser(): Observable<any[]> {
    const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNzVmOTczZDA0Mjg5MWEyNGE3ZTIyNSIsImlhdCI6MTYxODM0NTEyNywiZXhwIjoxNjIwOTM3MTI3fQ.YjqsGuMToQNWmar94bfL9oxX74uBE1rr4FTS-qv01v0'}
    return this.http.get<any[]>("https://citationni.herokuapp.com/user/me",{headers});
  }
}
