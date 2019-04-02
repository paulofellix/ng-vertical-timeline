import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgVerticalTimelineModule } from 'ng-vertical-timeline';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgVerticalTimelineModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
