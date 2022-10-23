import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, RouterState } from '@angular/router';
import { UsuarioService } from './auth/usuario.service';
import { Toast } from './toast/toast';
import { ToastComponent } from './toast/toast.component';
import { ToastService } from './toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ToastService],
})
export class AppComponent implements OnInit{

  @ViewChild('ToastCont', {read: ViewContainerRef}) ToastCont!:ViewContainerRef
  toasts:number = 0
  UsuarioNombre = ""

  constructor(
    public router: Router,
    private token: UsuarioService,
    private toastService:ToastService
  ){
    this.toastService.notificacion$.subscribe(
      (toast:Toast) => {
        const componentRef = this.ToastCont.createComponent<ToastComponent>(ToastComponent, {index:this.toasts})
        this.toasts += 1
        toast.id = this.toasts
        componentRef.instance.toast = toast
      }
    )
    this.toastService.cerrar$.subscribe(
      (id:number) => {
        try {
          this.ToastCont.remove(id)
          this.toasts -= 1
        } catch (error) {
          this.ToastCont.clear()
          this.toasts = 0
        }
        
      }
    )
  }
  ngOnInit(): void {
    let token = this.token.getToken()
    if(token == ""){
      this.router.navigate(['/login'])
    }else{
      this.router.navigate(['/dashboard'])
      this.token.getUsuario().subscribe (data => {
        this.UsuarioNombre = data.nombre
      })
    }
  }

  ngAfterViewInit(): void {
  }

  LogOut(){
    this.token.logout()
  }

}
