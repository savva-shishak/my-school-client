import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {
    path: 'teachers',
    component: ListComponent
  },
  {
    path: 'teachers/:id',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
