import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SimplePokemom} from '../interfaces/PokemonInterfaces';
import {FadeInImage} from './FadeInImage';
import ImageColors from 'react-native-image-colors';

interface Props {
  pokemon: SimplePokemom;
}

const windowWidth = Dimensions.get('window').width;

const PokemonCard = ({pokemon}: Props) => {
  const {navigate} = useNavigation();
  const [Color, setColor] = useState('#26304C');
  useEffect(() => {
    getcolors(pokemon);
  }, []);

  const getcolors = async (poke: SimplePokemom) => {
    let res = await ImageColors.getColors(poke.picture);

    if (res.platform === 'android') {
      setColor(res.dominant || '#26304C');
    } else {
      setColor(res.background || '#26304C');
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigate('Details', {simplePokemon: pokemon, color: Color});
      }}>
      <View
        style={{
          ...cardSty.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: Color,
        }}>
        <View>
          <Text style={cardSty.name}>{`${pokemon.name} \n#${pokemon.id}`}</Text>
        </View>
        <View style={cardSty.pokebolaContainer}>
          <Image
            style={cardSty.pokebola}
            source={require('../assets/pokebola-blanca.png')}
          />
        </View>

        <FadeInImage uri={pokemon.picture} style={cardSty.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

const cardSty = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: '#26304C',
    height: 120,
    width: 150,
    marginBottom: 25,
    borderRadius: 10,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  name: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },

  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -20,
    bottom: -20,
  },

  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },

  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.8,
  },
});

export default PokemonCard;
