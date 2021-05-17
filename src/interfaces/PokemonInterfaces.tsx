export interface PokemonPaginationResponse {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface SimplePokemom {
  id: string;
  name: string;
  picture: string;
  color?: string;
}