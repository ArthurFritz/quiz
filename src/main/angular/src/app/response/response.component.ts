import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { startWith, map } from 'rxjs/operators';
import { longStackSupport } from 'q';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  errorsClient = 50;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  stackCtrl = new FormControl();
  devCtrl = new FormControl();
  testCtrl = new FormControl();
  stacks: string[] = [];
  devs: string[] = [];
  tests: string[] = [];

  constructor() { 
    
  }

  add(event: MatChipInputEvent, reference, control): void {
      const input = event.input;
      const value = event.value;
      if ((value || '').trim()) {
        if(reference.indexOf(value.trim()) < 0){
          reference.push(value.trim());
        }
        if (input) {
          input.value = '';
        }
        control.setValue(null);
      }
  }

  remove(item: string,reference): void {
    const index = reference.indexOf(item);
    if (index >= 0) {
      reference.splice(index, 1);
    }
  }

  ngOnInit() {
  }

  isValid(){
    return this.stacks.length > 0 && this.devs.length > 0 && this.tests.length > 0
  }

  enviarResposta(){
    
  }
}
