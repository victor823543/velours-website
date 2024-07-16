import { useState, useEffect, FC } from 'react';

interface IncrementingNumberProps {
    callback: () => void;
}

const IncrementingNumber: FC<IncrementingNumberProps> = ({callback}) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const step = 10;
    const duration = 2.5 * 1000; // 1.5 seconds in milliseconds
    const interval = duration / (100 / step); // Calculate interval time

    const intervalId = setInterval(() => {
      setNumber(prevNumber => {
        if (prevNumber >= 100) {
          clearInterval(intervalId);
          return prevNumber;
        }
        return prevNumber + step;
      });
    }, interval);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    if (number >= 100) {
        callback()
    }
  }, [number])

  return (
    <span>
      {number}
    </span>
  );
};

export default IncrementingNumber;
