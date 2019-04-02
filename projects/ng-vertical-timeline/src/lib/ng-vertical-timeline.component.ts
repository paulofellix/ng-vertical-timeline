import { Component, OnInit, Input } from "@angular/core";
import { TimelineEvent } from "./timeline-event";

@Component({
  selector: "ng-vertical-timeline",
  templateUrl: "./ng-vertical-timeline.component.html",
  styleUrls: ['./ng-vertical-timeline.component.scss']
})
export class NgVerticalTimelineComponent implements OnInit {
  @Input()
  data: TimelineEvent[];

  constructor() {}

  ngOnInit() {}

  isPair(id: number): boolean {
    return !(id % 2);
  }
}
