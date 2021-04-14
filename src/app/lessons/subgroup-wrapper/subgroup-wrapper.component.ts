import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entity, Lesson } from '../types';

@Component({
  selector: 'app-subgroup-wrapper',
  templateUrl: './subgroup-wrapper.component.html',
  styleUrls: ['./subgroup-wrapper.component.css']
})
export class SubgroupWrapperComponent implements OnInit {

  @Input()
  week!: number;

  @Input()
  pair!: number;
  
  @Input()
  public num!: number;

  @Input()
  public view!: Entity;

  @Input()
  public lessons!: Lesson[];

  @Output()
  public deleteLesson = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  indexTrack(index: number, item: (Lesson | undefined)): any {
    return index;
  }

  get sort(): (Lesson | undefined)[] {
    return [
      this.lessons.find(item => item.subGroup === 1),
      this.lessons.find(item => item.subGroup === 2),
    ];
  }

  get somegroups(): boolean {
    if (this.view !== 'group') {
      return false;
    }

    for (const { subGroup } of this.lessons) {
      if (subGroup !== 0) { return true; }
    }

    return false;
  }
}
