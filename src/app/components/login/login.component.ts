import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/firebase/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl('')
  })

  public registerForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
    confirmPass: new FormControl(''),
  })

  constructor(
    private loginService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin () {
    console.log('submit form', this.loginForm)
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.pass)
      .then(resp => {
        console.log(resp)
        this.loginService.setLoggedIn(true)
        this.router.navigate(['home'])
      })
      .catch(err => {
        console.log(err)
      })
  }

  onRegister () {
    console.log('try register', this.registerForm.value)
    this.loginService.registerByUserEmail(this.registerForm.value.email, this.registerForm.value.pass)
      .then(resp => {
        console.log(resp)
        this.loginService.setLoggedIn(true)
        this.router.navigate(['home'])
      })
      .catch(err => {
        console.log(err)
      })
  }

}
