import { Component, OnInit } from '@angular/core';
import { AppComponentSvc } from '../AppComponentSvc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: any = {};

  constructor(private http: AppComponentSvc, private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    // console.log(this.loginModel);
    const url = `http://localhost:8085/userProfile/login/`;
    this.http.postHttp(url, this.loginModel, resp => {
      const { data } = resp;
      localStorage.setItem('userType', data);
      localStorage.setItem('userName', this.loginModel.userName);
      this.router.navigate(["/movies"]);
    }, err => {
      console.error(err);
      alert('Unable to login');
      window.location.href = "http://localhost:4200/login";
    });
  }

}
