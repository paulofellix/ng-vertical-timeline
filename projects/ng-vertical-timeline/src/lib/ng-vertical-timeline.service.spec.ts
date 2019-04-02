import { TestBed } from '@angular/core/testing';

import { NgVerticalTimelineService } from './ng-vertical-timeline.service';

describe('NgVerticalTimelineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgVerticalTimelineService = TestBed.get(NgVerticalTimelineService);
    expect(service).toBeTruthy();
  });
});
