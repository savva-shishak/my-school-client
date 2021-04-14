import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListRoomsComponent} from './list-rooms/list-rooms.component';

const routes: Routes = [
  {
    path: 'rooms',
    component: ListRoomsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
