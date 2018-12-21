import { TestBed, inject } from '@angular/core/testing';

import { ReplyContainerService } from './reply-container.service';

describe('ReplyContainerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReplyContainerService]
    });
  });

  it('should be created', inject([ReplyContainerService], (service: ReplyContainerService) => {
    expect(service).toBeTruthy();
  }));
});
