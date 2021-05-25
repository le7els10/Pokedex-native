import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Navigator from './Navigator';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab2Screen} from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      tabBarOptions={{
        activeTintColor: '#26304C',
        labelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        style: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Navigator}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({color}) => <Icon color={color} size={25} name="list" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color}) => (
            <Icon color={color} size={25} name="search" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
