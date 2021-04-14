import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/groups/types';

@Component({
  selector: 'app-cross',
  templateUrl: './cross.component.html',
  styleUrls: ['./cross.component.css']
})
export class CrossComponent implements OnInit {
  @Input() cross: Lesson[] = [];

  displayedColumns: string[] = ['group', 'teacher', 'room', 'subject'];

  constructor() { }

  ngOnInit() {
  }

  weekToString(week: number): string {
    return week === 1 ?
        'Верхняя неделя'
        :
        week === 2 ?
        'Нижняя неделя'
        :
        'Все недели';
  }
}
