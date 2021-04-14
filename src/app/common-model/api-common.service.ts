import { Injectable } from '@angular/core';
import {Model, ModelAlias, ResponseModel} from './types';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCommonService {

  constructor(
    private http: HttpClient
  ) { }

  getOne(model: ModelAlias, id: number): Observable<Model> {
    return this.http.get<Model>('/api/' + model + '/' + id);
  }

  getAll(model: ModelAlias): Observable<Model[]> {
    return this.http.get<ResponseModel<Model[]>>('/api/' + model).pipe(map(({_embedded}) => _embedded[model]));
  }

  add(model: ModelAlias, name: string): Observable<Model> {
    return this.http.post<Model>('/api/' + model, {name});
  }

  update(model: ModelAlias, id: number, name: string): Observable<void> {
    return this.http.put<void>('/api/' + model + '/' + id, {name});
  }

  remove(model: ModelAlias, id: number): Observable<void> {
    return this.http.delete<void>('/api/' + model + '/' + id);
  }
}
