import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onLogin() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (email === 'apruebo_angular@mail.com' && password === 'RooT') {
      this.authService.login('admin');
      this.router.navigate(['/users']);
    } else if (email === 'user@mail.com' && password === '1234') {
      this.authService.login('user');
      this.router.navigate(['/users']);
    } else {
      this.router.navigate(['/error']);
    }
  }
}