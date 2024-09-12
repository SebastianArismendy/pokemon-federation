import { Injectable } from '@angular/core';
import { PokemonGateway } from '../models/gateways/pokemon-gateway';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
@Injectable({
  providedIn: 'root'
})
export class PokemonUsecaseService {

  constructor(private _pokemonGateway: PokemonGateway) { }

  getAllPokemon(limit: number = 20): Observable<Pokemon[]> {
    return this._pokemonGateway.getAll(limit);
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    return this._pokemonGateway.getByName(name);
  }
}
