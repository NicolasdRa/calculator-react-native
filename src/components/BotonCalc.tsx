import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface BotonCalProps {
  texto: string;
  color?: string;
  ancho?: boolean;
  action: (numeroTexto: string) => void;
}

export const BotonCalc: React.FC<BotonCalProps> = ({
  texto,
  color = '#2D2D2D',
  ancho = false,
  action,
}) => {
  return (
    <TouchableOpacity onPress={() => action(texto)}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    alignItems: 'center',
    borderRadius: 100,
    height: 80,
    justifyContent: 'center',
    width: 80,
    marginHorizontal: 8,
  },
  botonTexto: {
    fontSize: 30,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
});
