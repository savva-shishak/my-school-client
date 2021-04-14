import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'groups',
    component: ListComponent,
  },
  {
    path: 'groups/:id',
    component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
