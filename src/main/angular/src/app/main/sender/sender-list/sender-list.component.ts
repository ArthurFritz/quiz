import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SenderService } from '../sender.service';

@Component({
  selector: 'app-sender-list',
  templateUrl: './sender-list.component.html',
  styleUrls: ['./sender-list.component.scss']
})
export class SenderListComponent implements OnInit {

  public displayedColumns = ['name', 'email', 'send','status', 'id'];
  noResults$ = true;
  public dataSource: MatTableDataSource<any>;

  constructor(private _senderService:SenderService) { }

  ngOnInit() {
    this.atualizarLista();
  }

  openForm(id){  
      window.open(window.location.origin+"/#/response/"+id, "_blank");
  }

  close(id){
    this._senderService.changeStatus(id, "CLOSE").subscribe(
      suc=>{
        this.atualizarLista();
      }
    );
  }

  reOpen(id){
    this._senderService.changeStatus(id, "WAIT").subscribe(
      suc=>{
        this.atualizarLista();
      }
    );
  }

  private atualizarLista(){
    this._senderService.getList().subscribe(
      suc=>{
        this.noResults$ = suc.length < 1
        this.dataSource = new MatTableDataSource(suc);
      },
      err=>{
        this.noResults$ = true
      }
    );
  }
}
