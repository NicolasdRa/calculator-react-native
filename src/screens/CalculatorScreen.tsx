import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/Theme';
import {CalcButton} from '../components/CalcButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    previousNumber,
    clear,
    makeNumber,
    deleteLastEntry,
    changeSign,
    add,
    subtract,
    multiply,
    divide,
    calculate,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.smallResult}>{previousNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      {/* row de botones */}
      <View style={styles.row}>
        <CalcButton value="C" colour="#9B9B9B" action={clear} />
        <CalcButton value="+/-" colour="#9B9B9B" action={changeSign} />
        <CalcButton value="del" colour="#9B9B9B" action={deleteLastEntry} />
        <CalcButton value="/" colour="#FF9427" action={divide} />
      </View>
      {/* row de botones */}
      <View style={styles.row}>
        <CalcButton value="7" action={makeNumber} />
        <CalcButton value="8" action={makeNumber} />
        <CalcButton value="9" action={makeNumber} />
        <CalcButton value="x" colour="#FF9427" action={multiply} />
      </View>
      <View style={styles.row}>
        <CalcButton value="4" action={makeNumber} />
        <CalcButton value="5" action={makeNumber} />
        <CalcButton value="6" action={makeNumber} />
        <CalcButton value="-" colour="#FF9427" action={subtract} />
      </View>
      <View style={styles.row}>
        <CalcButton value="1" action={makeNumber} />
        <CalcButton value="2" action={makeNumber} />
        <CalcButton value="3" action={makeNumber} />
        <CalcButton value="+" colour="#FF9427" action={add} />
      </View>
      <View style={styles.row}>
        <CalcButton value="0" wide action={makeNumber} />
        <CalcButton value="." action={makeNumber} />
        <CalcButton value="=" colour="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
