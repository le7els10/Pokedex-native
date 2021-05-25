import React, {useEffect, useState} from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useDebounceValue from '../hooks/useDebounceValue';

interface Props {
  sty?: StyleProp<ViewStyle>;
  onDebounce: (value: string) => void;
}

const SearchInput = ({sty, onDebounce}: Props) => {
  const [textValue, settextValue] = useState('');

  const debouncedValue = useDebounceValue(textValue);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  return (
    <View style={{...style.container, ...(sty as any)}}>
      <View style={style.textBack}>
        <TextInput
          placeholder="Buscar pokemon..."
          style={{
            ...style.textInput,
            top: Platform.OS === 'ios' ? 0 : 2,
          }}
          value={textValue}
          onChangeText={settextValue}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Icon color="grey" size={30} name="search" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
  textBack: {
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchInput;
