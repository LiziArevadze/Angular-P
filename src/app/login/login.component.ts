import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';
  users: any[] = [
    { username: 'lizi', password: 'lizilizi' },
    { username: 'test', password: 'testtest' },
  ];

  constructor(private router: Router) {}

  onSubmit() {
    const foundUser = this.users.find(user => user.username === this.username && user.password === this.password);

    if (foundUser) {
      this.router.navigate(['/home']);
    } else {
      this.message = 'Invalid username or password. Please try again.';
    }
  }
}