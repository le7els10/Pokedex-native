import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/PokemonApi';
import {
  PokemonPaginationResponse,
  Result,
  SimplePokemom,
} from '../interfaces/PokemonInterfaces';

const usePokemonSearch = () => {
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=1200');
  const [PokemonList, setPokemonList] = useState<SimplePokemom[]>([]);
  const [isFetching, setisFetching] = useState(false);

  const loadPokemons = async () => {
    const res = await pokemonApi.get<PokemonPaginationResponse>(
      nextPageUrl.current,
    );

    mapPokemonList(res.data.results);
  };

  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemom[] = pokemonList.map(
      ({name, url}, i) => {
        const urlParts = url.split('/');
        const id = urlParts[urlParts.length - 2];
        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        return {
          id,
          picture,
          name,
          url,
        };
      },
    );

    setPokemonList(newPokemonList);
    setisFetching(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isFetching,
    PokemonList,
  };
};

export default usePokemonSearch;
