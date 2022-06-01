import { ChangeEvent, useCallback, useState } from 'react';

export const useInput = (initialValue: string = '') => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setValue(e.target.value);
  }, []);

  const resetValue = useCallback(() => {
    setValue('');
  }, []);

  return { value, onChange, resetValue };
};
