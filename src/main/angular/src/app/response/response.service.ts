import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  private urlResponse = environment.url+"/v1/response";

  constructor(private _httpCliente: HttpClient) { }

  addResponse(identifier, dados){
    return this._httpCliente.put<any>(this.urlResponse+"/"+identifier,dados);
  }

  getResponse(identifier){
    return this._httpCliente.get<any>(this.urlResponse+"/"+identifier);
  }

}
