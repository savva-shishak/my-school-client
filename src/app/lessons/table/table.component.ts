import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Lesson, Entity, week} from '../types';

@Component({
  selector: 'app-table-lessons',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  week = week;
  @Input() lessons: Lesson[] = [];
  @Input() view: Entity = 'group';

  @Output() selectLesson = new EventEmitter<{ dayWeek: number, pairNum: number }>();
  @Output() deleteLesson = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  getDay(dayNum: number): Lesson[][] {
    const res: Lesson[][] = [];

    for (let i = 1; i <= 7; i++) {
      const lessons = this.lessons.filter(
        ({dayWeek, pairNum}) =>
          dayWeek === dayNum &&
          pairNum === i
        );
      res.push(lessons);
    }

    return res;
  }

  indexTrack(index: number, item: Lesson[]): any {
    return index;
  }
}
