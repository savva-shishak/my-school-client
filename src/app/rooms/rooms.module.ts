import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoomsComponent } from './list-rooms/list-rooms.component';
import {CommonModelModule} from '../common-model/common-model.module';
import {AppRoutingModule} from './app-routing.module';



@NgModule({
  declarations: [ListRoomsComponent],
    imports: [
      CommonModule,
      CommonModelModule,
      AppRoutingModule
    ],
})
export class RoomsModule { }
