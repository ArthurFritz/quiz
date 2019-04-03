import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from './loading.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './AuthInterceptor';
import { ErrorInterceptor } from './ErrorInterceptor';
import { ErrorModelComponent } from './error-model/error-model.component';
import { MatDialogModule } from '@angular/material';

let sharedValue = new LoadingService();
@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  declarations: [ErrorModelComponent],
  entryComponents: [ErrorModelComponent],
  
  providers:[
    { provide:LoadingService, useValue: sharedValue},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class ServicesModule { 
  
}
