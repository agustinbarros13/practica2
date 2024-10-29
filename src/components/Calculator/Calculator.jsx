// src/components/Calculator/Calculator.jsx
import React, { useRef, useState } from 'react';
import { calculateResult } from '../../utils/calculatorUtils';

function Calculator() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const operationRef = useRef(null);
  const firstNumRef = useRef(null);

  const handleOperation = (operation) => {
    if (inputRef.current.value) {
      firstNumRef.current = parseFloat(inputRef.current.value);
      operationRef.current = operation;
      inputRef.current.value = '';
    }
  };

  const handleEqual = () => {
    if (firstNumRef.current !== null && inputRef.current.value) {
      const secondNum = parseFloat(inputRef.current.value);
      const calcResult = calculateResult(firstNumRef.current, secondNum, operationRef.current);
      setResult(calcResult);
      setHistory((prev) => [...prev, calcResult].sort((a, b) => a - b));
      inputRef.current.value = '';
      firstNumRef.current = null;
      operationRef.current = null;
    }
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <input type="number" ref={inputRef} placeholder="Enter a number" />
      <div className="buttons">
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleOperation('/')}>/</button>
        <button onClick={handleEqual}>=</button>
      </div>
      <div>
        <h3>Result: {result}</h3>
        <h3>History:</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculator;
