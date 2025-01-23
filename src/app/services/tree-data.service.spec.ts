import { TestBed } from '@angular/core/testing';

import { TreeSelectService } from './tree-select.service';

describe('TreeSelectService', () => {
  let service: TreeSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
