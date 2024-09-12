import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
