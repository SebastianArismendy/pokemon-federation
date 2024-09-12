import { Pokemon } from "projects/mf-pokemon/src/app/domain/Pokemon/models/pokemon.model";
import { PokemonRS } from "../models/rs/pokemonRS.model";

export const pokemonMapper = (pokemon: PokemonRS): Pokemon => {
  return {
    name: pokemon.name,
    base_experience: pokemon.base_experience,
    height: pokemon.height,
    weight: pokemon.weight,
    types: pokemon.types.map((typeInfo: any) => ({ name: typeInfo.type.name })),
    imagen: { url: pokemon.sprites.front_default }
  } as Pokemon;
}
