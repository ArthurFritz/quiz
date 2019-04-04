import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SenderService } from '../sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sender-form',
  templateUrl: './sender-form.component.html',
  styleUrls: ['./sender-form.component.scss']
})
export class SenderFormComponent implements OnInit {

  public form : FormGroup;

  constructor(private _formBuilder: FormBuilder, private _senderService: SenderService, private _router:Router) { 
    this.form = _formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
    });
  }

  ngOnInit() {
  }

  save(){
    if(this.form.valid){
      this._senderService.addSend(this.form.value).subscribe(
        suc=>{
          this._router.navigate(["/main/sender"]);
        },
        err=>{
          alert("Não foi possível realizar o cadastro")
        }
      );
    }
  }

}
