import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [{ path: 'main', 
component: MainComponent,
canActivate: [],
canActivateChild: [],
children: [
  {
    path: 'sender',
    loadChildren: './sender/sender.module#SenderModule'
  },
  {
    path: 'reports',
    loadChildren: './reports/reports.module#ReportsModule'
  }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
