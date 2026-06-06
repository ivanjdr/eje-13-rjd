import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './recuperar.component.html'
})
export class RecuperarComponent {
  correo: string = '';
  mensaje: string = '';

  recuperar(): void {
    if (this.correo.trim() === '') {
      this.mensaje = 'Ingresa un correo válido.';
      return;
    }
    this.mensaje = 'Se ha enviado un enlace de recuperación a tu correo.';
    this.correo = '';
  }
}