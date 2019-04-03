import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponseComponent } from './response.component';

const routes: Routes = [
  { path: 'response/:uuid', 
    component: ResponseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponseRoutingModule { }
