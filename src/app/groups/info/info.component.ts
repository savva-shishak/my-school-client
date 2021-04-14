import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ApiGroupsService } from '../api-groups.service';
import {GroupFullInfo, Subject} from '../types';

function emptyGroupInfo(): GroupFullInfo {
  return {
    id: 0,
    name: '',
    subjects: []
  };
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css', '../util/main.css']
})
export class InfoComponent implements OnInit {

  subjectsLoading = false;

  subjectsOptionsLoading = false;
  subjectsOptions: Subject[] = [];

  group: GroupFullInfo = emptyGroupInfo();
  loading = false;

  name = '';
  addingSubject: Subject | null = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private api: ApiGroupsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.loading = true;
      this.api.get(id).subscribe(({group}) => {
        this.group = group;
        this.name = group.name;
        this.loading = false;
        this.loadSubjects();
      });
    });
  }

  update(): void {
    this.loading = true;
    this.api
      .update((this.group as GroupFullInfo).id, this.name)
      .subscribe(() => this.loading = false);
  }

  delete(): void {
    this.loading = true;
    this.api.delete(this.group.id).subscribe(() => {
      this.router.navigate(['/groups']).then();
    });
  }

  loadSubjects(): void {
    this.subjectsOptionsLoading = true;
    this.api.getSubjects(this.group.id).subscribe(res => {
      this.subjectsOptions = res;
      this.subjectsOptionsLoading = false;
    });
  }

  add(): void {
    if (this.addingSubject) {
      const sbj = this.addingSubject;
      this.subjectsLoading = true;

      this.api.addSubject(this.group.id, sbj.id).subscribe(() => {
        this.group.subjects.push(sbj);
        this.loadSubjects();
        this.subjectsLoading = false;
      });
    }
  }

  removeSubject(subjectId: number): void {
    this.subjectsLoading = true;

    this.api.removeSubject(this.group.id, subjectId).subscribe(() => {
      this.group.subjects = this.group.subjects.filter(({id}) => +subjectId !== +id);
      this.subjectsLoading = false;
      this.loadSubjects();
    });
  }
}
