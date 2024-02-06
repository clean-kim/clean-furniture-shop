import { useState } from 'react';

export const useCheckbox = <T>(list: T[]) => {
  const [checks, setChecks] = useState(Array.from(list, () => false));
  const [allChecked, setAllChecked] = useState(false);

  const handleAllCheckClick = () => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setChecks(checks.map(() => newValue));
  };

  const handleCheckClick = (index: number) => {
    const newChecks = [...checks];
    newChecks[index] = !newChecks[index];
    setChecks(newChecks);
    setAllChecked(newChecks.every(check => check));
  };

  return {
    allChecked,
    checks,
    handleAllCheckClick,
    handleCheckClick,
  };
};