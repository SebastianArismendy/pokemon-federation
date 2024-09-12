import { TestBed } from '@angular/core/testing';

import { PokemonUsecaseService } from './pokemon-usecase.service';
import { PokemonGateway } from '../models/gateways/pokemon-gateway';

describe('PokemonUsecaseService', () => {
  let service: PokemonUsecaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonGateway]
    });
    service = TestBed.inject(PokemonUsecaseService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
