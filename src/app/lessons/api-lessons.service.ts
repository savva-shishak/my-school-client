import { Injectable } from '@angular/core';
import {Entity, Lesson, LessonDataCreate} from './types';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiLessonsService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(entity: Entity, id: number): Observable<Lesson[]> {
    return this.http.get<Lesson[]>('/api/lessons/' + entity + '/' + id);
  }

  add(lesson: LessonDataCreate): Observable<void> {
    return this.http.get<void>('/api/lessons', {params: lesson as any});
  }

  getCross(lesson: LessonDataCreate): Observable<Lesson[]> {
    return this.http.get<any>(`/api/lessons/cross`, {params: lesson as any});
  }

  removeLesson(id: number): Observable<void> {
    return this.http.delete<void>(`/api/lessons/` + id);
  }
}
