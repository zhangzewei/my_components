import { TestBed, inject } from '@angular/core/testing';

import { XiamiPlayerService } from './xiami-player.service';

describe('XiamiPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XiamiPlayerService]
    });
  });

  it('should be created', inject([XiamiPlayerService], (service: XiamiPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
