import {Component, Input, OnInit} from '@angular/core';
import {Model, ModelAlias} from '../types';
import {ApiCommonService} from '../api-common.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() model: ModelAlias = 'groups';
  @Input() inputLabel = 'Название';

  loading = true;
  list: Model[] = [];
  newName = '';

  constructor(
    private api: ApiCommonService
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.api.getAll(this.model).subscribe(list => {
      this.list = list;
      this.loading = false;
    });
  }

  add(): void {
    this.loading = true;
    this.api.add(this.model, this.newName).subscribe(item => {
      this.newName = '';
      this.list.push(item);
      this.loading = false;
    });
  }
}
