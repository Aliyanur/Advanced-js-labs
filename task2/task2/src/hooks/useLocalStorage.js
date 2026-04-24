import { useState, useEffect, useCallback } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item
        ? JSON.parse(item)
        : initialValue;
    } catch (error) {
      console.warn(error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore =
          value instanceof Function
            ? value(storedValue)
            : value;

        setStoredValue(valueToStore);

        window.localStorage.setItem(
          key,
          JSON.stringify(valueToStore)
        );
      } catch (error) {
        console.warn(error);
      }
    },
    [key, storedValue]
  );

  const removeValue = useCallback(() => {
    window.localStorage.removeItem(key);
    setStoredValue(initialValue);
  }, [key, initialValue]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue !== null) {
        setStoredValue(JSON.parse(e.newValue));
      }
    };

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    return () =>
      window.removeEventListener(
        "storage",
        handleStorageChange
      );
  }, [key]);

  return [storedValue, setValue, removeValue];
}

export default useLocalStorage;