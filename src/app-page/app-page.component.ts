import { Component, OnInit } from '@angular/core';

import {AppComponent} from '../app/app.component';

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css']
})
export class AppPageComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
  }

  hideAppPage() {
      this.appComponent.toggleAppPage();
  }
}
