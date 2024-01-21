import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';

type CalculatorProps = {
  initialCount: number;
}

export function Calculator({ initialCount }: CalculatorProps) {
  const [calcNum, setCalcNum] = useState(1);

  const calculator = (_: MouseEvent<HTMLButtonElement>, sign: number = 0) => {
    console.log(sign);
    if(sign > 0) {setCalcNum(prevState => prevState++);}
    else if(sign < 1 && calcNum > 1) {setCalcNum(prevState => prevState--);}
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
    setCalcNum(initialCount);
  }, [initialCount]);

  return (
    <div className='calculator'>
      <button onClick={calculator}>-</button>
      <input
        type="number"
        id="targetNumber"
        value={calcNum}
        onChange={handleChange}
        className='calculator__input'
        readOnly={true}
        min={0} />
      <button onClick={calculator}>+</button>
    </div>
  );
}