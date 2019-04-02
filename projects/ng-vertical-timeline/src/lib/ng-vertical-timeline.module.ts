import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { NgVerticalTimelineComponent } from "./ng-vertical-timeline.component";
import { CardComponent } from "./card/card.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [NgVerticalTimelineComponent, CardComponent],
  exports: [NgVerticalTimelineComponent, CardComponent]
})
export class NgVerticalTimelineModule {}
