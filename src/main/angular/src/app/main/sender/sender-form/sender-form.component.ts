import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sender-form',
  templateUrl: './sender-form.component.html',
  styleUrls: ['./sender-form.component.scss']
})
export class SenderFormComponent implements OnInit {

  public form : FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form = formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
    });
  }

  ngOnInit() {
  }

  save(){}

}
