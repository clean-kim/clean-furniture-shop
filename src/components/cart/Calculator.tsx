import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import styles from './calculator.module.scss';

type CalculatorProps = {
  initialCount: number;
}

export function Calculator({ initialCount = 1 }: CalculatorProps) {
  const [calcNum, setCalcNum] = useState(initialCount);

  const calculator = (_: MouseEvent<HTMLButtonElement>, sign: number = 0) => {
    if (sign > 0 && calcNum < 20){
      setCalcNum(prevState => prevState + 1);
    }
    else if (sign < 1 && calcNum > 1) {
      setCalcNum(prevState => prevState - 1);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const intValue = parseInt(value);
    if (intValue < 0) {
      setCalcNum(0);
    } else {
      setCalcNum(intValue);
    }
  };

  useEffect(() => {
  }, [calcNum]);

  return (
    <div className={styles.calculator}>
      <button onClick={e => calculator(e, -1)}>-</button>
      <input
        type="number"
        id="targetNumber"
        value={calcNum}
        onChange={handleChange}
        readOnly={true}
        min={0}
        max={20}/>
      <button onClick={e => calculator(e, 1)}>+</button>
    </div>
  );
}