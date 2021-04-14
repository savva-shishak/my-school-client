import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [ListComponent],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    HttpClientModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CommonModelModule { }
