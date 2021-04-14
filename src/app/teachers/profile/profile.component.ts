import { Component, OnInit } from '@angular/core';
import {Model} from '../../common-model/types';
import {ApiCommonService} from '../../common-model/api-common.service';
import {ApiTeachersService} from '../api-teachers.service';
import {ActivatedRoute, Router} from '@angular/router';
import { SubjectWithGroups } from '../types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loading = false;
  teacherName = '';
  teacher: Model = {id: 0, name: ''};

  loadingSubjects = false;
  subjectName = '';
  subjects: SubjectWithGroups[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private commonApi: ApiCommonService,
    private api: ApiTeachersService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.loading = true;
      this.loadingSubjects = true;

      this.api.getSubjects(id).subscribe(list => {
        this.subjects = list;
        this.loadingSubjects = false;
      });

      this.commonApi.getOne('teachers', id).subscribe(teacher => {
        this.teacher = teacher;
        this.teacherName = teacher.name;
        this.loading = false;
      });
    });
  }

  add(): void {
    this.loadingSubjects = true;
    this.api.addSubject(this.teacher.id, this.subjectName).subscribe(subject => {
      this.subjects.unshift({...subject, groups: []});
      this.loadingSubjects = false;
      this.subjectName = '';
    });
  }

  update(): void {
    this.loading = true;
    this.commonApi.update('teachers', this.teacher.id, this.teacherName).subscribe(() => {
      this.teacher.name = this.teacherName;
      this.loading = false;
    });
  }

  delete(): void {
    this.loading = true;
    this.commonApi.remove('teachers', this.teacher.id).subscribe(() => {
      this.router.navigate(['/teachers']).then();
    });
  }

  removeSubject(id: number): void {
    this.loadingSubjects = true;

    this.commonApi.remove('subjects', id).subscribe(() => this.loadingSubjects = false);
    this.subjects = this.subjects.filter(item => item.id !== id);
  }
}
