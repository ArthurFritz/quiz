import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-sender-list',
  templateUrl: './sender-list.component.html',
  styleUrls: ['./sender-list.component.scss']
})
export class SenderListComponent implements OnInit {

  public displayedColumns = ['code', 'name', 'email', 'send','status', 'id'];
  noResults$ = true;
  public dataSource: MatTableDataSource<any>;

  constructor() { }

  ngOnInit() {
    //this.noResults$ = suc.length == 0;
    this.dataSource = new MatTableDataSource([]);
  }

}
