import { useState } from 'react';

export const useCheckbox = <T>(list: T[]) => {
  const [checkList, setCheckList] = useState(Array.from(list, () => { return false; }));
  const [allChecked, setAllChecked] = useState(false);

  const handleAllCheckClick = () => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setCheckList(checkList.map(() => { return newValue; }));
  };

  const handleCheckClick = (index: number) => {
    const newCheckList = [...checkList];
    newCheckList[index] = !newCheckList[index];
    setCheckList(newCheckList);
    setAllChecked(newCheckList.every(check => { return check; }));
  };

  return {
    allChecked,
    checkList,
    handleAllCheckClick,
    handleCheckClick,
  };
};