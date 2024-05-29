import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatus = new BehaviorSubject<boolean>(this.hasToken());
  
  authStatus$ = this.authStatus.asObservable();

  private hasToken(): boolean {
    return !!localStorage.getItem('user');
  }

  login(user: string) {
    localStorage.setItem('user', user);
    this.authStatus.next(true);
  }

  logout() {
    localStorage.removeItem('user');
    this.authStatus.next(false);
  }
}
