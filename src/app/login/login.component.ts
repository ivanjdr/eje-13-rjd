import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  correo: string = '';
  password: string = '';
  mensaje: string = '';
  esError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    // Si ya tiene token, lo mandamos directo al dashboard
    if (this.authService.estaAutenticado()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
    // Validaciones
    if (this.correo.trim() === '' || this.password.trim() === '') {
      this.mostrarMensaje('Ingresa tus credenciales para continuar', true);
      return;
    }

    const exito = this.authService.iniciarSesion(this.correo, this.password);
    
    if (exito) {
      this.router.navigate(['/dashboard']);
    } else {
      this.mostrarMensaje('Correo o contraseña incorrectos.', true);
    }
  }

  mostrarMensaje(msg: string, error: boolean): void {
    this.mensaje = msg;
    this.esError = error;
  }
}