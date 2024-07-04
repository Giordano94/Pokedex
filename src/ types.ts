export interface Pokemon {
  name: string;
  url: string;
}

export interface Ability {
  name: string;
}

export interface PokemonAbilities {
  ability: Ability;
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<{ type: { name: string } }>;
  sprites: { front_default: string };
  abilities: PokemonAbilities[];
}
