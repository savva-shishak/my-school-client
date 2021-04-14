import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Entity, Lesson } from '../types';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent {
  @Input()
  week!: number;

  @Input()
  pair!: number;

  @Input()
  public view!: Entity;

  @Input()
  public lesson?: Lesson;

  @Output()
  public deleteLesson = new EventEmitter();

  freeOptions = {
    'show-delay': 1000,
    placement: 'left',
  }

  constructor() { }
}
