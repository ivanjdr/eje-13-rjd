import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'token_ahgb';

  constructor() { }

  iniciarSesion(correo: string, password: string): boolean {
    // Validación simulada de credenciales
    if (correo === 'admin@ipn.mx' && password === '123456') {
      // Generamos un token ficticio para la práctica
      const tokenFalso = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ahgb_token';
      this.guardarToken(tokenFalso);
      return true;
    }
    return false;
  }

  guardarToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  obtenerToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  cerrarSesion(): void {
    localStorage.removeItem(this.tokenKey);
  }

  estaAutenticado(): boolean {
    return this.obtenerToken() !== null;
  }
}