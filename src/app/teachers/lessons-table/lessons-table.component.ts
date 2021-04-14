import { Component, Input, OnInit } from '@angular/core';
import { Model } from 'src/app/common-model/types';
import { AbstractLessonsComponent } from 'src/app/lessons/abstract-lessons-component';
import { ApiLessonsService } from 'src/app/lessons/api-lessons.service';
import { Lesson } from 'src/app/lessons/types';
import { ApiRoomsService } from 'src/app/rooms/api-rooms.service';
import { SubjectWithGroups } from '../types';

@Component({
  selector: 'app-lessons-table',
  templateUrl: './lessons-table.component.html',
  styleUrls: ['./lessons-table.component.css']
})
export class LessonsTableComponent extends AbstractLessonsComponent implements OnInit {
  get entityId(): number {
    return this.teacherId;
  }

  @Input()
  teacherId!: number;

  @Input()
  subjects: SubjectWithGroups[] = [];

  rooms: Model[] = [];
  roomsLoading = true;


  constructor(
    private apiRooms: ApiRoomsService,
    apiLessons: ApiLessonsService
  ) {
    super(apiLessons, 'teacher');
  }

  ngOnInit(): void {
    this.apiRooms.getAll().subscribe(rooms => {
      this.rooms = rooms;
      this.roomsLoading = false;
    });

    this.load();
  }

  get subjectGroupValue(): null | string {
    return this.lesson.subject + ':' + this.lesson.group;
  }

  set subjectGroupValue(value: string | null) {
    if (!value) {
      return;
    }

    const [subject, group] = value.split(':');

    this.lesson.group = +group;
    this.lesson.subject = +subject;
  }

  get filtredLessons(): Lesson[] {
    return this.lessons.filter(lesson => this.subjects.find(({id}) => id === lesson.subject.id));
  }
}
