import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DashboardModule } from './components/dashboard/dashboard.module';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';






@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DashboardModule,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
