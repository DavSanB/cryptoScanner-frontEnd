import { Component, OnInit } from '@angular/core';
import { Router, RouterState } from '@angular/router';
import { UsuarioService } from './auth/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  
  UsuarioNombre = ""

  constructor(
    public router: Router,
    private token: UsuarioService
  ){}
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

  LogOut(){
    this.token.logout()
  }

}
