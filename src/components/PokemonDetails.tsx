import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FullPokemon} from '../interfaces/PokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: FullPokemon;
}

const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      {/* types and weigth */}
      <View style={{...theme.container, marginTop: 370}}>
        <Text style={theme.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              style={{...theme.regularText, marginRight: 10}}
              key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>

        <Text style={theme.title}>Weigth</Text>
        <Text style={theme.regularText}>{pokemon.weight} kg</Text>
      </View>

      {/* sprites */}

      <View
        style={{
          ...theme.container,
        }}>
        <Text style={theme.title}>Sprites</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={theme.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={theme.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={theme.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={theme.basicSprite}
        />
      </ScrollView>

      {/* Abilities */}
      <View style={theme.container}>
        <Text style={theme.title}>Skills</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              style={{...theme.regularText, marginRight: 10}}
              key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>

      {/* Movements */}
      <View style={theme.container}>
        <Text style={theme.title}>Movements</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {pokemon.moves.map(({move}) => (
            <Text
              style={{
                ...theme.regularText,
                marginRight: 10,
              }}
              key={move.name}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>

      {/* Abilities */}
      <View style={theme.container}>
        <Text style={theme.title}>Stats</Text>
        <View>
          {pokemon.stats.map((stat, i) => (
            <View style={{flexDirection: 'row'}} key={`${stat.stat.name}-${i}`}>
              <Text style={{...theme.regularText, marginRight: 10, width: 150}}>
                {stat.stat.name}
              </Text>
              <Text
                style={{
                  ...theme.regularText,
                  fontWeight: 'bold',
                }}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>
      </View>
      {/* final sprite */}
      <View style={{marginBottom: 20, alignItems: 'center'}}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={theme.basicSprite}
        />
      </View>
    </ScrollView>
  );
};

const theme = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});

export default PokemonDetails;
