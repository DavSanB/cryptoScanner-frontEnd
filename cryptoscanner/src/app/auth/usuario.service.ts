import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Usuario } from './usuario';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  constructor(
    private http: HttpClient,
    private cookies: CookieService
  ) { }

  login(usuario: any): Observable<any> {
    return this.http.post(environment.GateWay + "/token", usuario, httpOptions)
  }

  logout():void{
    this.cookies.deleteAll('/')
  }

  setToken(token:string){
    this.cookies.set("token", token)
  }

  getToken(){
    return this.cookies.get("token")
  }

  getUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(environment.GateWay + "/usuarios")
  }

  createUsuario(usuario: any): Observable<any> {
    return this.http.post(environment.GateWay + "/usuarios", usuario, httpOptions)
  }
}
