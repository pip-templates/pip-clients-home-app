import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'pip-clients-shell';

import { HomeContainerComponent } from './containers/home-container/home-container.component';

export const routes: Routes = [
  { path: '', component: HomeContainerComponent, canActivate: [AuthGuard] },
  { path: '404', redirectTo: '' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
