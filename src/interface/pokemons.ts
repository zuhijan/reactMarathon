export interface IPokemons {
  total: number;
  count: number;
  offset: string;
  limit: number;
  pokemons: PokemonsRequest[];
}

export type PokemonsRequest = {
  nameClean: string;
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
  };
  types: string[];
  img: string;
  name: string;
  baseExperience: number;
  height: number;
  id: number;
  isDefault: boolean;
  order: number;
  weight: number;
};
