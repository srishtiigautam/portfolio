import React, { useState, useEffect } from "react";

const Counter = ({ targetNumber, duration }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (currentNumber < targetNumber) {
      const stepTime = duration / targetNumber; // Time per increment
      const timer = setTimeout(() => {
        setCurrentNumber(currentNumber + 1);
      }, stepTime);

      return () => clearTimeout(timer); // Cleanup timer on unmount or change
    }
  }, [currentNumber, targetNumber, duration]);

  return <span>{currentNumber}</span>;
};

export default Counter;
