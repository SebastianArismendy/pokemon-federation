export interface Pokemon {
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  types: PokemonType[];
  imagen: PokemonImage;
}

interface PokemonType {
  name: string;
}

interface PokemonImage{
  url: string
}
