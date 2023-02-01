import {useRef, useState} from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastResultRef = useRef<Operators>();

  const clear = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const makeNumber = (value: string) => {
    if (value === '.' && number.includes('.')) {
      return;
    }

    setNumber(
      number.startsWith('0') || number.startsWith('-0')
        ? value === '.'
          ? number + value
          : value === '0' && number.includes('.')
          ? number + value
          : value !== '0' && !number.includes('.')
          ? value
          : value === '0' && !number.includes('.')
          ? number
          : number + value
        : number !== '0' || value === '.'
        ? number + value
        : value,
    );
  };

  const changeSign = () => {
    number.includes('-')
      ? setNumber(number.replace('-', ''))
      : setNumber('-' + number);
  };

  const deleteLastEntry = () => {
    const newValue = number.slice(0, number.length - 1);

    newValue === '-' || newValue === ''
      ? setNumber('0')
      : number.length === 1
      ? setNumber('0')
      : setNumber(newValue);
  };

  const savePreviousNumber = () => {
    number.endsWith('.')
      ? setPreviousNumber(number.slice(0, -1))
      : setPreviousNumber(number);
    setNumber('0');
  };

  const divide = () => {
    savePreviousNumber();
    lastResultRef.current = Operators.divide;
  };

  const multiply = () => {
    savePreviousNumber();
    lastResultRef.current = Operators.multiply;
  };

  const subtract = () => {
    savePreviousNumber();
    lastResultRef.current = Operators.subtract;
  };

  const add = () => {
    savePreviousNumber();
    lastResultRef.current = Operators.add;
  };

  const calculate = () => {
    const previous = Number(previousNumber);
    const current = Number(number);

    switch (lastResultRef.current) {
      case Operators.add: {
        setNumber(`${previous + current}`);
        break;
      }
      case Operators.subtract: {
        setNumber(`${previous - current}`);
        break;
      }
      case Operators.multiply: {
        setNumber(`${previous * current}`);
        break;
      }
      case Operators.divide: {
        setNumber(`${previous / current}`);
        break;
      }
    }
    setPreviousNumber('0');

    lastResultRef.current = undefined;
  };

  return {
    number,
    previousNumber,
    clear,
    makeNumber,
    changeSign,
    deleteLastEntry,
    divide,
    multiply,
    subtract,
    add,
    calculate,
  };
};
