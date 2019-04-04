import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private urlLogin = environment.url+"/api/auth/signin";

  constructor(private _httpCliente: HttpClient, private _router:Router) { }

  login(dados: any): any {
    return this._httpCliente.post<any>(this.urlLogin,dados);
  }

  public deslogar(){
    sessionStorage.removeItem("token");
    this._router.navigate(["/login"]);
  }
}
