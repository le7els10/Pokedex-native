import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {FadeInImage} from '../components/FadeInImage';
import {RootStackParams} from '../navigation/Navigator';
import usePokemon from '../hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';
interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;
  const {name, id, picture} = simplePokemon;
  const {top} = useSafeAreaInsets();

  const {pokemon, islaoding} = usePokemon(id);

  return (
    <View style={{flex: 1}}>
      <View style={{...styles.headerContainer, backgroundColor: color}}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{...styles.backButton, top: top + 5}}>
          <Icon name="arrow-back-outline" color="#fff" size={35} />
        </TouchableOpacity>

        {/* name */}
        <Text
          style={{
            ...styles.pokemonName,
            top: top + 40,
          }}>{`${name} \n #${id}`}</Text>

        {/* poke blanca */}
        <Image
          style={styles.pokeball}
          source={require('../assets/pokebola-blanca.png')}
        />

        <FadeInImage style={styles.pokemonImage} uri={picture} />
      </View>
      {/* Detalles y loading */}
      {islaoding ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: '#fff',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.6,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PokemonScreen;
