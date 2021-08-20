import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { DetailComponent } from './components/launches/detail/detail.component';
import { RocketService } from './components/services/rocket.service';
import { LaunchService } from './components/services/launch.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LaunchesComponent, DetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [LaunchService, RocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
