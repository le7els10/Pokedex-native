import {useEffect, useState} from 'react';

const useDebounceValue = (input: string = '', time: number = 500) => {
  const [debouncedValue, setdebouncedValue] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setdebouncedValue(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return debouncedValue;
};

export default useDebounceValue;
