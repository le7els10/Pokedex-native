import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PokemonScreen from '../screens/PokemonScreen';
import SearchScreens from '../screens/SearchScreens';
import {RootStackParams} from './Navigator';

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
  return (
    <Tab2.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Tab2.Screen name="Home" component={SearchScreens} />
      <Tab2.Screen name="Details" component={PokemonScreen} />
    </Tab2.Navigator>
  );
};
