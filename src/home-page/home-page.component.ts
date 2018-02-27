import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app/app.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }
   
  ngOnInit() {
  }
  
    hideAppPage() {
      this.appComponent.toggleAppPage();
  }
}
