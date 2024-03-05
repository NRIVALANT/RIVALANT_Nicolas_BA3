/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EcommerceService } from './EcommerceService.service';

describe('Service: EcommerceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EcommerceService]
    });
  });

  it('should ...', inject([EcommerceService], (service: EcommerceService) => {
    expect(service).toBeTruthy();
  }));
});
