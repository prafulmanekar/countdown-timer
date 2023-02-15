import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [timeCount, setTimeCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      const inputTime = parseInt(event.target.value);
      if (isNaN(inputTime)) {
        setTimeCount(0);
        setCurrentTime(0);
        return;
      }
      setTimeCount(Math.floor(inputTime));
      setCurrentTime(Math.floor(inputTime));
      event.target.value = "";
    }
  }

  useEffect(() => {
    if (timeCount > 0) {
      setTimerId(
        setInterval(() => {
          setCurrentTime((prevTime) => prevTime - 1);
        }, 1000)
      );
    }
    return () => {
      clearInterval(timerId);
    };
  }, [timeCount]);

  useEffect(() => {
    if (currentTime === 0) {
      clearInterval(timerId);
    }
  }, [currentTime]);

  return (
    <div>
      <input 
        type="text"
        id="timeCount"
        placeholder="Enter time in seconds"
        onKeyDown={handleKeyDown}
      />
      <div id="current-time">{currentTime}</div>
    </div>
  );
}

export default CountdownTimer;
