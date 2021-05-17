import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/PokemonApi';
import {
  PokemonPaginationResponse,
  Result,
  SimplePokemom,
} from '../interfaces/PokemonInterfaces';

const usePokemonPagination = () => {
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
  const [PokemonList, setPokemonList] = useState<SimplePokemom[]>([]);
  const [isLoading, setisLoading] = useState(false);

  const loadPokemons = async () => {
    setisLoading(true);
    const res = await pokemonApi.get<PokemonPaginationResponse>(
      nextPageUrl.current,
    );

    nextPageUrl.current = res.data.next;
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

    setPokemonList([...PokemonList, ...newPokemonList]);
    setisLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isLoading,
    PokemonList,
    loadPokemons,
  };
};

export default usePokemonPagination;
