import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => setTime(t => t + 1), 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const formatTime = () => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div>
      <h2>Time: {formatTime()}</h2>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => { setIsRunning(false); setTime(0); }}>Reset</button>
    </div>
  );
}

export default Stopwatch;
