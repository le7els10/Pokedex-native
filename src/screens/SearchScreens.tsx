import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Platform,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import {SimplePokemom} from '../interfaces/PokemonInterfaces';
import sty from '../theme/AppTheme';

const SearchScreens = () => {
  const {top} = useSafeAreaInsets();
  const {width} = Dimensions.get('window');
  const {isFetching, PokemonList} = usePokemonSearch();
  const [term, setTerm] = useState('');
  const [FilteredPokemons, setFilteredPokemons] = useState<SimplePokemom[]>([]);

  useEffect(() => {
    if (term.length === 0) {
      return setFilteredPokemons([]);
    }

    if (isNaN(Number(term))) {
      setFilteredPokemons(
        PokemonList.filter(pok =>
          pok.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
        ),
      );
    } else {
      const pokemonById = PokemonList.find(pok => pok.id === term);
      setFilteredPokemons(pokemonById ? [pokemonById] : []);
    }
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
      }}>
      <SearchInput
        onDebounce={value => setTerm(value)}
        sty={{
          position: 'absolute',
          width: width - 40,
          zIndex: 999,
          top: Platform.OS === 'ios' ? top : top + 30,
        }}
      />

      <FlatList
        data={FilteredPokemons}
        keyExtractor={pokemon => pokemon.id}
        numColumns={2}
        ListHeaderComponent={
          <Text
            style={{
              ...sty.title,
              ...sty.globalMargin,
              top: top + 20,
              marginBottom: top + 40,
              marginTop: Platform.OS === 'ios' ? top : top + 30,
            }}>
            {term}
          </Text>
        }
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

export default SearchScreens;
