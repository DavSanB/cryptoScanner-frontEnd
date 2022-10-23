import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../auth/usuario.service';
import { Toast } from '../toast/toast';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
 
  public loginForm = this.fb.group({
    nombre: ['', Validators.required],
    password: ['', Validators.required]    
  })

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public usuarioServicio: UsuarioService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    let token = this.usuarioServicio.getToken()
    if(token != ""){
      window.location.reload();
      this.router.navigate(['/dashboard'])
    }
    //this.toastService.error(new Toast(2,"Nooooo"))
  }

  login(){
    this.usuarioServicio.login(this.loginForm.value).subscribe (data => {
      this.usuarioServicio.setToken(data.access_token)
      window.location.reload();
      this.router.navigate(['/dashboard'])
    })
  }

}
