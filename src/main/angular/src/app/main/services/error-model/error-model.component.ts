import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-error-model',
  templateUrl: './error-model.component.html',
  styleUrls: ['./error-model.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ErrorModelComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

}
