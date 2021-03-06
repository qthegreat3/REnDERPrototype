import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppPageComponent } from '../app-page/app-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageComponent } from '../home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AppPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
