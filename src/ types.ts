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

export interface Description {
  description: string;
}

export interface Characteristics {
  descriptions: Description[];
}

export interface PokemonDetails {
  image: string;
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  abilities: PokemonAbilities[];
  characteristics: Characteristics;
  sprites: { other: { showdown: { front_default: string } } };
}
