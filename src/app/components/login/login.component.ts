import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ImportsModules } from '../../configs/import-modules';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ImportsModules

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css', 
})
export class LoginComponent {
 loginForm!: FormGroup
  loading = false

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]],
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

    this.loading = true

    // Simulación de autenticación
    setTimeout(() => {
      // Aquí iría la lógica real de autenticación
      console.log("Datos de login:", this.loginForm.value)
      this.messageService.add({
        severity: "success",
        summary: "Éxito",
        detail: "¡Bienvenido a Pasta Deliciosa!",
      })
      this.loading = false
    }, 1500)
  }
}
