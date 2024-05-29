import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated = !!localStorage.getItem('user'); 
    this.authService.authStatus$.subscribe(status => {
      this.isAuthenticated = status;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}