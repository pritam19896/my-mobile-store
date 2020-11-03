import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;

  constructor(
    private router: Router
  ) {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === '1';
  }

  login() {
    return of(true)
      .pipe(
        delay(1000),
        map(() => {
          localStorage.setItem('isLoggedIn', '1');
          this.isLoggedIn = true;
          this.router.navigate(['/home']);
          return true;
        })
      );
  }

  logout() {
    localStorage.setItem('isLoggedIn', '0');
    this.isLoggedIn = false;
  }
}
