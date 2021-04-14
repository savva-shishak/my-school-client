import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { AppRoutingModule } from './app-routing.module';

import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { ApiGroupsService } from './api-groups.service';
import { InfoComponent } from './info/info.component';
import {LessonsModule} from '../lessons/lessons.module';
import { LessonsComponent } from './lessons/lessons.component';
import {CdkTableModule} from '@angular/cdk/table';
import {CommonModelModule} from '../common-model/common-model.module';

@NgModule({
  declarations: [ListComponent, InfoComponent, LessonsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    CommonModelModule,

    MatListModule,
    HttpClientModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    LessonsModule,
    CdkTableModule,
  ],
  providers: [
    ApiGroupsService
  ]
})
export class GroupsModule { }
