import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form:FormGroup;
  public login:boolean = false;
  public erro;

  constructor(private _formBuilder:FormBuilder, private _loginService: LoginService, private _router: Router) {
    this.form  = _formBuilder.group({
      "username": [null, Validators.compose([Validators.required])],
      "password"  : [null, Validators.required]
    });
   }

   ngOnInit() {
    sessionStorage.clear();
    this.login = false;
  }
  
  realizarLogin(){
    this.login = true;
    this._loginService.login(this.form.value).subscribe(
      suc=>{
        sessionStorage.setItem("token", suc.token);
        this._router.navigate(["/main"]);
        this.login = false;
      },
      err=>{
        this.login = false;
      }
    );
  }

}
