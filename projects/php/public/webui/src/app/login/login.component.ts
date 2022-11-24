import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, UserLogin } from '../models/user.model';
import { AuthenticationService } from '../authentication.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name!: string;
  isLoggedIn: boolean = false;
  userLogin: UserLogin = new UserLogin();
  user!: User;
  constructor(private userDataService: UserDataService, private authService: AuthenticationService) { }

  ngOnInit(): void {

  }

  login(frmLogin: NgForm) {
    this.userLogin.fillFromNgForm(frmLogin);
    this.userDataService.login(this.userLogin).subscribe({
      next: () => {
        this.isLoggedIn = true;
        this.authService.token = this.authService.token;
      },
      error: () => { }
    })
  }

  logout() {
    this.isLoggedIn = false;
    this.name = "";
    this.user.reset();
  }


}