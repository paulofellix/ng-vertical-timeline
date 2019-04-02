import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgVerticalTimelineComponent } from './ng-vertical-timeline.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [NgVerticalTimelineComponent],
  exports: [NgVerticalTimelineComponent]
})
export class NgVerticalTimelineModule {}
