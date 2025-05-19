import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ImportsModules } from '../../configs/import-modules';
import { LoginService } from '../../services/login.service';
import { Login } from '../../Models/login.model';
import { Session } from '../../Models/sesion.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ImportsModules],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css', 
  providers: [LoginService]
})
export class LoginComponent {
  loginForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private loginService:LoginService, 
    private router:Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      recordarme: null
    })
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Por favor complete todos los campos correctamente",
      })
      return
    }
    let newLogin = new Login(); 
    newLogin.Usuario = this.loginForm.value.username; 
    newLogin.Password = this.loginForm.value.password;
    this.loginService.Login(newLogin).subscribe(x => {
      this.messageService.add({
        severity: "success",
        summary: "Éxito",
        detail: "¡Bienvenido a Pastas La Piamontesa!",
      })

      var sesion = new Session(x);
      sessionStorage.setItem("sesion", JSON.stringify(sesion));
      this.router.navigate([`/home/Dashboard`])
    })
  }
}
