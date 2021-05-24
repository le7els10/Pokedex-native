import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';
import {SimplePokemom} from '../interfaces/PokemonInterfaces';

export type RootStackParams = {
  Home: undefined;
  Details: {simplePokemon: SimplePokemom; color: string};
};

const Navigator = () => {
  const Stack = createStackNavigator<RootStackParams>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={PokemonScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
