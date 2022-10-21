import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuario } from './usuario';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(
    private http: HttpClient,
    private cookies: CookieService
  ) { }

  login(usuario: any): Observable<any> {
    return this.http.post("http://localhost:8000/token", usuario)
  }

  setToken(token:string){
    this.cookies.set("token", token)
  }

  getToken(){
    return this.cookies.get("token")
  }
}
