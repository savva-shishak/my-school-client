import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { TableItemComponent } from './table-item/table-item.component';
import { CrossComponent } from './cross/cross.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { WeekWrapperComponent } from './week-wrapper/week-wrapper.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { SubgroupWrapperComponent } from './subgroup-wrapper/subgroup-wrapper.component';
import { FreeComponent } from './free/free.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [TableComponent, TableItemComponent, CrossComponent, WeekWrapperComponent, SubgroupWrapperComponent, FreeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    TooltipModule,

    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    MatExpansionModule,
  ],
  exports: [TableComponent, CrossComponent],
})
export class LessonsModule { }
