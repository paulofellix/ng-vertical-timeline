import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgVerticalTimelineComponent } from './ng-vertical-timeline.component';

describe('NgVerticalTimelineComponent', () => {
  let component: NgVerticalTimelineComponent;
  let fixture: ComponentFixture<NgVerticalTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgVerticalTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgVerticalTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
