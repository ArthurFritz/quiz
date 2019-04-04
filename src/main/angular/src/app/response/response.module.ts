import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponseRoutingModule } from './response-routing.module';
import { ResponseComponent } from './response.component';
import { MatToolbarModule, MatCardModule, MatChipsModule, MatInputModule, MatIconModule, MatOptionModule, MatAutocompleteModule, MatSliderModule, MatButtonModule, MatProgressBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResponseService } from './response.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [ResponseComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ResponseRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSliderModule,
    FormsModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [
    HttpClient,
    ResponseService
  ]
})
export class ResponseModule { }
