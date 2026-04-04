import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1>Timer: {time} seconds</h1>
      <button onClick={handleStartPause}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset} disabled={isRunning}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
