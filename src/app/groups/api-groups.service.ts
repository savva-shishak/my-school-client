import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {GroupFullInfo, GroupListItem, Lesson, Subject} from './types';

@Injectable({
  providedIn: 'root'
})
export class ApiGroupsService {

  constructor(
    private client: HttpClient
  ) { }

  get(id: number): Observable<{group: GroupFullInfo, lessons: Lesson[]}> {
    return this.client.get<{group: GroupFullInfo, lessons: Lesson[]}>('/api/my/groups/' + id);
  }

  update(id: number, name: string): Observable<void> {
    return this.client.put<void>('/api/my/groups/' + id, name);
  }

  delete(id: number): Observable<void> {
    return this.client.delete<void>('/api/my/groups/' + id);
  }

  getSubjects(id: number): Observable<Subject[]> {
    return this.client.get<Subject[]>(`/api/my/groups/${id}/subjects/select`);
  }

  addSubject(groupId: number, subjectId: number): Observable<void> {
    return this.client.put<void>(`/api/my/groups/subject/${groupId}/${subjectId}`, {});
  }

  removeSubject(groupId: number, subjectId: number): Observable<void> {
    return this.client.delete<void>(`/api/my/groups/subject/${groupId}/${subjectId}`);
  }
}
