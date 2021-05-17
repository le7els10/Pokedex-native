import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';
import PokemonCard from '../components/PokemonCard';
import usePokemonPagination from '../hooks/usePokemonPagination';
import sty from '../theme/AppTheme';

const HomeScreen = () => {
  const {top: windowTop} = useSafeAreaInsets();
  const {PokemonList, isLoading, loadPokemons} = usePokemonPagination();
  return (
    <>
      <View style={sty.globalMargin}>
        <Image
          source={require('../assets/pokebola.png')}
          style={sty.pokebolaBG}
        />
        {/* <Text style={{...sty.title, top: windowTop + 20}}>Pokedex</Text> */}
        <FlatList
          data={PokemonList}
          keyExtractor={pokemon => pokemon.id}
          numColumns={2}
          ListHeaderComponent={
            <Text
              style={{
                ...sty.title,
                ...sty.globalMargin,
                top: windowTop + 20,
                marginBottom: windowTop + 20,
              }}>
              Pokedex
            </Text>
          }
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          //infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator size={20} color="#bbb" style={{height: 100}} />
          }
        />
      </View>
    </>
  );
};

export default HomeScreen;
