import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SenderRoutingModule } from './sender-routing.module';
import { SenderFormComponent } from './sender-form/sender-form.component';
import { SenderListComponent } from './sender-list/sender-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTooltipModule, MatToolbarModule, MatSelectModule, MatOptionModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServicesModule } from '../services/services.module';
import { SenderService } from './sender.service';

@NgModule({
  declarations: [SenderFormComponent, SenderListComponent],
  imports: [
    CommonModule,
    SenderRoutingModule,
    FlexLayoutModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSelectModule, 
    MatOptionModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    ServicesModule
  ],
  providers: [
    FormBuilder,
    HttpClient,
    SenderService
  ]
})
export class SenderModule { }
