import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entity, Lesson } from '../types';

@Component({
  selector: 'app-week-wrapper',
  templateUrl: './week-wrapper.component.html',
  styleUrls: ['./week-wrapper.component.css']
})
export class WeekWrapperComponent implements OnInit {

  weekToggle = 0;

  @Input()
  week!: number;

  @Input()
  pair!: number;
  
  @Input()
  public view!: Entity;

  @Input()
  public lessons!: Lesson[];

  @Input()
  public num!: number;

  @Output()
  public deleteLesson = new EventEmitter<number>();

  get sortByWeek(): Lesson[][] {
    return [
      this.lessons.filter(item => item.week === 1),
      this.lessons.filter(item => item.week === 2),
    ];
  }

  constructor() { }

  ngOnInit() {
  }

  indexTrack(index: number, item: Lesson[]): any {
    return index;
  }

  get someWeek(): boolean {
    for (const lesson of this.lessons) {
      if (lesson.week !== 0) {
        return true;
      }
    }

    return false;
  }
}
