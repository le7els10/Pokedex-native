import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SimplePokemom} from '../interfaces/PokemonInterfaces';

interface Props {
  pokemon: SimplePokemom;
}

const windowWidth = Dimensions.get('window').width;

const PokemonCard = ({pokemon}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={{...cardSty.cardContainer, width: windowWidth * 0.4}}>
        <View style={cardSty.name}>
          <Text>{`${pokemon.name} \n#${pokemon.id}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const cardSty = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'red',
    height: 120,
    width: 150,
    marginBottom: 25,
    borderRadius: 10,
  },
  name: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
});

export default PokemonCard;
