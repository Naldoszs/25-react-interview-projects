import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    //get the initial value to be loaded on page refresh
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    } catch (err) {
      console.error(err.message);
      return initialValue;
    }
  });

  //set D'data with useEffect hook
  useEffect(() => {
    try {
      if (value !== undefined) localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err.message);
    }
  }, [key, value]);

  //return statement
  return [value, setValue];
};

export default useLocalStorage;
