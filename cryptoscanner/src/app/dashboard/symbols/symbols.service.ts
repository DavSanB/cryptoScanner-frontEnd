import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EventSourcePolyfill } from 'ng-event-source'
import { UsuarioService } from 'src/app/auth/usuario.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SymbolsService {

  private closeServerFuente = new Subject<boolean>()
  private openServerFuente = new Subject<boolean>()

  closedServer$ = this.closeServerFuente.asObservable()
  openedServer$ = this.openServerFuente.asObservable()

  constructor(
    private token: UsuarioService
  ) { }

  public getSymbols(): EventSourcePolyfill{
    let token = this.token.getToken()
    let eventSource = new EventSourcePolyfill(environment.Scanner,{
      headers:{Authorization: "Bearer " + token}
    })
    eventSource.onerror = (e: any) =>{
      console.log(e)
    }
    return eventSource
  }

  public closeServer(estado:boolean){
    this.closeServerFuente.next(estado)
  }

  public openServer(estado:boolean){
    this.openServerFuente.next(estado)
  }

}
