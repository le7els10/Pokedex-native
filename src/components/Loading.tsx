import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

const Loading = () => {
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
};

export default Loading;
