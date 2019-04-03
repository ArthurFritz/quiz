import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenderFormComponent } from './sender-form/sender-form.component';
import { SenderListComponent } from './sender-list/sender-list.component';

const routes: Routes = [ {
  path: 'add',
  component: SenderFormComponent
},
{
  path: '**',
  component: SenderListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SenderRoutingModule { }
