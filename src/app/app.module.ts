import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DashboardModule } from './components/dashboard/dashboard.module';
import { PipesModule } from './pipes/pipes.module';






@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DashboardModule,PipesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
