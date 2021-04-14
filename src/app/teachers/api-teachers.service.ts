import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Model} from '../common-model/types';
import { SubjectWithGroups } from './types';

@Injectable({
  providedIn: 'root'
})
export class ApiTeachersService {

  constructor(
    private http: HttpClient
  ) { }

  getSubjects(id: number): Observable<SubjectWithGroups[]> {
    return this.http.get<SubjectWithGroups[]>(`/api/v1/teachers/${id}/subjects`);
  }

  addSubject(teacherId: number, name: string): Observable<Model> {
    return this.http.put<Model>(`/api/v1/teachers/${teacherId}/${name}`, {});
  }
}
