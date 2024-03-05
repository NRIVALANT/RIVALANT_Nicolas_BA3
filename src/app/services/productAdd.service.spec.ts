/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductAddService } from './productAdd.service';

describe('Service: ProductAdd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductAddService]
    });
  });

  it('should ...', inject([ProductAddService], (service: ProductAddService) => {
    expect(service).toBeTruthy();
  }));
});
