import { TestBed } from '@angular/core/testing';

import { ServiciosBesService } from './servicios-bes.service';

describe('ServiciosBesService', () => {
  let service: ServiciosBesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosBesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
