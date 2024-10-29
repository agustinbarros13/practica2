import React from 'react';

function Timer({ time }) {
  return (
    <div className="timer">
      <h2>Current Time:</h2>
      <p>{time}</p>
    </div>
  );
}

export default Timer;
