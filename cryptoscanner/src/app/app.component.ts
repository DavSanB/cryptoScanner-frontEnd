import { Component, OnInit } from '@angular/core';
import { Router, RouterState } from '@angular/router';
import { UsuarioService } from './auth/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  
  
  constructor(
    public router:Router
  ){}
  ngOnInit(): void {

  }

  active(){
    let state: RouterState = this.router.routerState
    console.log(this.router.routerState.snapshot.url)
  }

}
