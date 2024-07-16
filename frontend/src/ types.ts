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
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<{ type: { name: string } }>;
  abilities: PokemonAbilities[];
  characteristics: Characteristics;
  sprites: {
    front_default: string;
    other: { showdown: { front_default: string } };
  };
}
