import { TestBed } from '@angular/core/testing';

import { ItemCardModalService } from './item-card-modal.service';

describe('ItemCardModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemCardModalService = TestBed.get(ItemCardModalService);
    expect(service).toBeTruthy();
  });
});
