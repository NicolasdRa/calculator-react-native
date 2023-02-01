import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/Theme';
import {BotonCalc} from '../components/BotonCalc';

export const CalculadoraScreen = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const limpiar = () => {
    setNumero('0');
  };

  const armarNumero = (numeroTexto: string) => {
    // No aceptar doble punto
    setNumero(numero + numeroTexto);
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoChico}>{numeroAnterior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" action={limpiar} />
        <BotonCalc texto="+/-" color="#9B9B9B" action={limpiar} />
        <BotonCalc texto="del" color="#9B9B9B" action={limpiar} />
        <BotonCalc texto="/" color="#FF9427" action={limpiar} />
      </View>
      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="7" action={armarNumero} />
        <BotonCalc texto="8" action={armarNumero} />
        <BotonCalc texto="9" action={armarNumero} />
        <BotonCalc texto="x" color="#FF9427" action={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="4" action={armarNumero} />
        <BotonCalc texto="5" action={armarNumero} />
        <BotonCalc texto="6" action={armarNumero} />
        <BotonCalc texto="-" color="#FF9427" action={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="1" action={armarNumero} />
        <BotonCalc texto="2" action={armarNumero} />
        <BotonCalc texto="3" action={armarNumero} />
        <BotonCalc texto="+" color="#FF9427" action={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho action={armarNumero} />
        <BotonCalc texto="." action={armarNumero} />
        <BotonCalc texto="=" color="#FF9427" action={limpiar} />
      </View>
    </View>
  );
};
