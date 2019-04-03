import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponseRoutingModule } from './response-routing.module';
import { ResponseComponent } from './response.component';
import { MatToolbarModule, MatCardModule, MatChipsModule, MatInputModule, MatIconModule, MatOptionModule, MatAutocompleteModule, MatSliderModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
    MatButtonModule
  ]
})
export class ResponseModule { }
