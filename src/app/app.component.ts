import { Component } from '@angular/core';

import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor() {}
    
    title = 'app';
    
    private isShown = true;
    
    toggleAppPage(): void {
       this.isShown = !this.isShown;
  }
    showHomePage(): void {
        this.isShown = true;    
    }
}
