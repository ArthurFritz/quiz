import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { startWith, map } from 'rxjs/operators';
import { longStackSupport } from 'q';
import { ResponseService } from './response.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  loading = false;
  private id;
  status = "WAIT";

  constructor(private _responseService:ResponseService,private _router: Router, private _activateRoute: ActivatedRoute) { 
    
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
    this._activateRoute.params.subscribe(params=>{
      this.id = params['uuid'];
    });
    if(this.id){
      this.carregarDados();
    } else {
      alert("Identificador não localizado");
      this._router.navigate(['/login']);
    }
  }

  isValid(){
    return this.stacks.length > 0 && this.devs.length > 0 && this.tests.length > 0
  }

  private carregarDados(){
    this.loading = true;
    this._responseService.getResponse(this.id).subscribe(suc=>{
      this.devs = suc.devs ? suc.devs : [];
      this.tests = suc.tests ? suc.tests : [];
      this.stacks = suc.stacks ? suc.stacks : [];
      this.errorsClient = suc.erros ? suc.erros : [];
      this.status = suc.status;
      this.loading = false;
    },err=>{
      this.loading = false;
    })
  }

  enviarResposta(){
    if(this.isValid()){
        this.loading = true;
        this._responseService.addResponse(this.id,{
            devs:this.devs,
            tests:this.tests,
            stacks:this.stacks,
            erros:this.errorsClient
        }).subscribe(suc=>{
            this.loading = false;
            this.carregarDados();
        },err=>{
            this.loading = false;
        });
    }else{
      alert("Favor preencha todas as informações")
    }
  }
}
