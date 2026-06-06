import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './registro.component.html'
})
export class RegistroComponent {
  nombre: string = '';
  correo: string = '';
  password: string = '';
  repetirPassword: string = '';
  mensaje: string = '';
  esError: boolean = false;

  registrar(): void {
    if (this.nombre.trim().length < 3) {
      this.mostrarMensaje('El nombre es muy corto.', true);
      return;
    }
    if (this.password.length < 6) {
      this.mostrarMensaje('La contraseña debe tener al menos 6 caracteres.', true);
      return;
    }
    if (this.password !== this.repetirPassword) {
      this.mostrarMensaje('Las contraseñas no coinciden.', true);
      return;
    }

    this.mostrarMensaje('¡Cuenta registrada exitosamente!', false);
    // Limpiar formulario
    this.nombre = ''; this.correo = ''; this.password = ''; this.repetirPassword = '';
  }

  mostrarMensaje(msg: string, error: boolean): void {
    this.mensaje = msg;
    this.esError = error;
  }
}