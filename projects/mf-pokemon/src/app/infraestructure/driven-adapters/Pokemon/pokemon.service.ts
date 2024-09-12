import { Injectable } from '@angular/core';
import { PokemonGateway } from '../../../domain/Pokemon/models/gateways/pokemon-gateway';
import { Pokemon } from '../../../domain/Pokemon/models/pokemon.model';
import { Observable, switchMap, map, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokemonListRS, Result } from './models/rs/pokemonRS.model';
import { pokemonMapper } from './mapper/pokemon.mapper';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements PokemonGateway {

  private _url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private _http: HttpClient) { }
  getAll(limit: number = 20): Observable<Pokemon[]> {
    return this._http.get<PokemonListRS>(`${this._url}?limit=${limit}&offset=0`).pipe(
      map((response: PokemonListRS) => response.results),
      switchMap((pokemonList: Result[]) => {
        const detailRequests: Observable<Pokemon>[] = pokemonList.map((pokemonInfo) =>
          this.getByName(pokemonInfo.name)
        );
        return forkJoin(detailRequests);
      }),
    )
  }

  getByName(name: string): Observable<Pokemon> {
    return this._http.get<Pokemon>(`${this._url}/${name}`).pipe(
      map((response: any) => {
        return pokemonMapper(response);
      })
    );
  }
}
