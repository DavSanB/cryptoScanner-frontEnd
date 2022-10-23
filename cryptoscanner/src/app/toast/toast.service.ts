import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Toast } from './toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private notificacion = new Subject<Toast>()
  private cerrar = new Subject<number>()

  notificacion$ = this.notificacion.asObservable()
  cerrar$ = this.cerrar.asObservable()

  error(toast:Toast){
    this.notificacion.next(toast)
  }

  close(id:number){
    this.cerrar.next(id)
  }

}
