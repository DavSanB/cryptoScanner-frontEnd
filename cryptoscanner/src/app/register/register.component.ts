import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from '../auth/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  public registerForm = this.fb.group({
    nombre: ['', Validators.required],
    password: ['', Validators.required]    
  })

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public usuarioServicio: UsuarioService
  ) { }

  ngOnInit(): void {
    let token = this.usuarioServicio.getToken()
    if(token != ""){
      this.router.navigate(['/dashboard'])
      window.location.reload();
    }
  }

  register(){
    this.usuarioServicio.createUsuario(this.registerForm.value).subscribe (data => {
      this.usuarioServicio.setToken(data.access_token)
      this.router.navigate(['/dashboard'])
      window.location.reload();
    })
  }

}
