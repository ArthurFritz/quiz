import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SenderService {
  
  private urlSender = environment.url+"/v1/sender";

  constructor(private _httpCliente: HttpClient) { }

  addSend(dados: any): any {
    return this._httpCliente.post<any>(this.urlSender,dados);
  }

  getList(): any {
    return this._httpCliente.get<any>(this.urlSender);
  }

  changeStatus(id: any, status: string): any {
    return this._httpCliente.put<any>(this.urlSender+"/"+id+"/"+status,{});
  }
}
