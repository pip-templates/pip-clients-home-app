import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'pip-clients-shell';

import { HomeContainerComponent } from './home/containers/home-container/home-container.component';

const appRoutes: Routes = [
  // loadChildren: 'src/app/home/home.module#HomeModule', canLoad: [AuthGuard] // this is for lazy-loading way
  { path: '', component: HomeContainerComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
