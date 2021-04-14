import { Component, OnInit } from '@angular/core';
import { ErrorStorage } from './intrceptors/ErrorInterceptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'main';

  constructor(public errorStorage: ErrorStorage) {}

  ngOnInit(): void {
  }
}
