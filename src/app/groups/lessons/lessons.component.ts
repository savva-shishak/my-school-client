import {Component, Input} from '@angular/core';
import {ApiLessonsService} from '../../lessons/api-lessons.service';
import {Lesson, Model} from '../../lessons/types';
import {ApiRoomsService} from '../../rooms/api-rooms.service';
import {Subject} from '../types';
import { AbstractLessonsComponent } from 'src/app/lessons/abstract-lessons-component';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent extends AbstractLessonsComponent {

  @Input() entityId!: number;
  displayedColumns: string[] = ['group', 'teacher', 'room', 'subject'];

  @Input() subjects: Subject[] = [];
  rooms: Model[] = [];

  constructor(
    lessonsService: ApiLessonsService,
    private roomsService: ApiRoomsService
  ) {
    super(lessonsService, 'group');
  }

  async ngOnInit(): Promise<void> {
     this.lesson.group = this.entityId;

     await Promise.all([
       this.load(),
       this.roomsService.getAll().toPromise().then(res => this.rooms = res)
     ]);

     this.loading = false;
  }

  getLessons(): Lesson[] {
    return this.lessons.filter(({subject: {id}}) => !!this.subjects.find(item => item.id === id));
  }
}
