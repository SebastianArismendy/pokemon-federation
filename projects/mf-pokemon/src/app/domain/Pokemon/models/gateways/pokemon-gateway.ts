import { Observable } from "rxjs";
import { Pokemon } from "../pokemon.model";

export abstract class PokemonGateway {
    abstract getAll(limit: number): Observable<Pokemon[]>;
    abstract getByName(name: string): Observable<Pokemon>;
}
