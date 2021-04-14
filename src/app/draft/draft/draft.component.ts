import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/lessons/types';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  constructor() { }

  lessons: Lesson[] = [
    {
      id: 1,
      group: {
        id: 1,
        name: 'test-group'
      },
      week: 1,
      subject: {
        id: 1,
        name: 'test subject',
        teacher: {
          id: 1,
          name: 'test teacher'
        }
      },
      room: {
        id: 1,
        name: 'test room'
      },
      subGroup: 1,
      dayWeek: 1,
      pairNum: 1
    },
    {
      id: 1,
      group: {
        id: 1,
        name: 'test-group'
      },
      week: 1,
      subject: {
        id: 1,
        name: 'test subject',
        teacher: {
          id: 1,
          name: 'test teacher'
        }
      },
      room: {
        id: 1,
        name: 'test room'
      },
      subGroup: 2,
      dayWeek: 1,
      pairNum: 1
    },
    {
      id: 1,
      group: {
        id: 1,
        name: 'test-group'
      },
      week: 2,
      subject: {
        id: 1,
        name: 'test subject',
        teacher: {
          id: 1,
          name: 'test teacher'
        }
      },
      room: {
        id: 1,
        name: 'test room'
      },
      subGroup: 0,
      dayWeek: 1,
      pairNum: 1
    },
  ];

  ngOnInit(): void {
  }
}
