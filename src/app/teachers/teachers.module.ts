import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import {AppRoutingModule} from './app-routing.module';
import {CommonModelModule} from '../common-model/common-model.module';
import { ProfileComponent } from './profile/profile.component';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {LessonsModule} from '../lessons/lessons.module';
import {CdkTableModule} from '@angular/cdk/table';
import { LessonsTableComponent } from './lessons-table/lessons-table.component';



@NgModule({
  declarations: [ListComponent, ProfileComponent, LessonsTableComponent],
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
    ]
})
export class TeachersModule { }
