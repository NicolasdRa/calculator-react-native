import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface CalcButtonProps {
  value: string;
  colour?: string;
  wide?: boolean;
  action: (value: string) => void;
}

export const CalcButton: React.FC<CalcButtonProps> = ({
  value,
  colour = '#2D2D2D',
  wide = false,
  action,
}) => {
  return (
    <TouchableOpacity onPress={() => action(value)}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.button,
          backgroundColor: colour,
          width: wide ? 152 : 68,
          paddingBottom: value === 'x' ? 5 : 0,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.buttonText,
            color: colour === '#9B9B9B' ? 'black' : 'white',
          }}>
          {value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 100,
    height: 68,
    justifyContent: 'center',
    width: 68,
    marginHorizontal: 8,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
});
