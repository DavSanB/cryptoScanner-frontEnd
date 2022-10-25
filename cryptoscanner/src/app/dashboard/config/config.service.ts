import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ConfigNew } from 'src/app/auth/config';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http: HttpClient,
    private cookies: CookieService
    ) { }

  public updateConfig(config:ConfigNew): Observable<ConfigNew>{
    return this.http.put<ConfigNew>(environment.GateWay + "/usuarios/config", config, httpOptions)
  }

}
