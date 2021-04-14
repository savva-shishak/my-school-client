import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraftComponent } from './draft/draft/draft.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/groups'
  },
  {
    path: 'draft',
    component: DraftComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
