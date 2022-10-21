import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EventSourcePolyfill } from 'ng-event-source'
import { UsuarioService } from 'src/app/auth/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SymbolsService {
  constructor(
    private token: UsuarioService
  ) { }

  public getSymbols(): EventSourcePolyfill{
    let token = this.token.getToken()
    let eventSource = new EventSourcePolyfill(environment.Scanner + "/endless",{
      headers:{Authorization: "Bearer " + token}
    })
    eventSource.onerror = (e: any) =>{
      console.log(e)
    }
    return eventSource
  }
}
