import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface BotonCalProps {
  text: string;
  colour?: string;
  wide?: boolean;
  action: (textNumber: string) => void;
}

export const BotonCalc: React.FC<BotonCalProps> = ({
  text,
  colour = '#2D2D2D',
  wide = false,
  action,
}) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.button,
          backgroundColor: colour,
          width: wide ? 180 : 80,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.buttonText,
            color: colour === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 100,
    height: 80,
    justifyContent: 'center',
    width: 80,
    marginHorizontal: 8,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
});
