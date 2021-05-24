import {useEffect, useState} from 'react';
import {FullPokemon} from '../interfaces/PokemonInterfaces';
import {pokemonApi} from '../api/PokemonApi';
const usePokemon = (id: string) => {
  const [islaoding, setislaoding] = useState(true);
  const [pokemon, setpokemon] = useState<FullPokemon>({} as FullPokemon);

  const loadpokemon = async () => {
    const res = await pokemonApi.get<FullPokemon>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setpokemon(res.data);
    setislaoding(false);
  };

  useEffect(() => {
    loadpokemon();
  }, []);

  return {
    islaoding,
    pokemon,
  };
};

export default usePokemon;
