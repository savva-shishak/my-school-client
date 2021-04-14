import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Model} from '../lessons/types';
import {ResponseModel} from '../common-model/types';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiRoomsService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Model[]> {
    return this.http.get<ResponseModel<Model[]>>('/api/rooms/').pipe(map(({_embedded}) => _embedded.rooms));
  }
}
