import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraftComponent } from './draft/draft.component';
import { LessonsModule } from '../lessons/lessons.module';



@NgModule({
  declarations: [DraftComponent],
  imports: [
    CommonModule,
    LessonsModule
  ]
})
export class DraftModule { }
