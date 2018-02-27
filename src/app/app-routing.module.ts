import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppPageComponent } from '../app-page/app-page.component';
import { HomePageComponent } from '../home-page/home-page.component';

const routes: Routes = [
  {path: 'app-page', component: AppPageComponent },
  {path: 'home-page', component: HomePageComponent },
  {path: '', redirectTo: 'home-page', pathMatch: 'full'},
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
