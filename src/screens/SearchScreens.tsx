import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, Platform, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PokemonCard from '../components/PokemonCard';
import SearchInput from '../components/SearchInput';
import usePokemonSearch from '../hooks/usePokemonSearch';
import sty from '../theme/AppTheme';

const SearchScreens = () => {
  const {top} = useSafeAreaInsets();

  const {isFetching, PokemonList} = usePokemonSearch();
  console.log(PokemonList);

  if (isFetching) {
    return (
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
        }}>
        <ActivityIndicator size={50} />
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        marginTop: Platform.OS === 'ios' ? top : top + 10,
        marginHorizontal: 20,
      }}>
      <SearchInput />

      <FlatList
        data={PokemonList}
        keyExtractor={pokemon => pokemon.id}
        numColumns={2}
        ListHeaderComponent={
          <Text
            style={{
              ...sty.title,
              ...sty.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
            }}>
            Pokedex
          </Text>
        }
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

export default SearchScreens;
