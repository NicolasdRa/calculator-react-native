import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/Theme';
import {BotonCalc} from '../components/BotonCalc';

export const CalculatorScreen = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const clear = () => {
    setNumber('0');
  };

  const makeNumber = (textNumber: string) => {
    // No aceptar doble punto
    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (textNumber === '.') {
        setNumber(number + textNumber);

        // Evaluar si es otro cero y hay un punto
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);

        // Evaluar si es diferente de cero y no tiene un punto
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);

        // Evitar 0000.0
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const changeSign = () => {
    number.includes('-')
      ? setNumber(number.replace('-', ''))
      : setNumber('-' + number);
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{previousNumber}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      {/* row de botones */}
      <View style={styles.row}>
        <BotonCalc text="C" colour="#9B9B9B" action={clear} />
        <BotonCalc text="+/-" colour="#9B9B9B" action={changeSign} />
        <BotonCalc text="del" colour="#9B9B9B" action={clear} />
        <BotonCalc text="/" colour="#FF9427" action={clear} />
      </View>
      {/* row de botones */}
      <View style={styles.row}>
        <BotonCalc text="7" action={makeNumber} />
        <BotonCalc text="8" action={makeNumber} />
        <BotonCalc text="9" action={makeNumber} />
        <BotonCalc text="x" colour="#FF9427" action={clear} />
      </View>
      <View style={styles.row}>
        <BotonCalc text="4" action={makeNumber} />
        <BotonCalc text="5" action={makeNumber} />
        <BotonCalc text="6" action={makeNumber} />
        <BotonCalc text="-" colour="#FF9427" action={clear} />
      </View>
      <View style={styles.row}>
        <BotonCalc text="1" action={makeNumber} />
        <BotonCalc text="2" action={makeNumber} />
        <BotonCalc text="3" action={makeNumber} />
        <BotonCalc text="+" colour="#FF9427" action={clear} />
      </View>
      <View style={styles.row}>
        <BotonCalc text="0" wide action={makeNumber} />
        <BotonCalc text="." action={makeNumber} />
        <BotonCalc text="=" colour="#FF9427" action={clear} />
      </View>
    </View>
  );
};
