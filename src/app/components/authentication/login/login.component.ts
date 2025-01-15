import { Component } from '@angular/core';
import { AuthService } from '../../../servicio/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso:', response);
        localStorage.setItem('access_token', response.access_token);
        this.router.navigate(['/register']);

      },
      error: (error) => {
        console.error('Error en el inicio de sesión:', error);
      },
    });
  }
}
