import { Component, Input, OnInit } from '@angular/core';
import { Entity } from '../types';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.css']
})
export class FreeComponent implements OnInit {

  @Input()
  week!: number;

  @Input()
  view!: Entity;

  @Input()
  pair!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
