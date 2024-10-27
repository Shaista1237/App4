import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  // Recursive function to calculate factorial
  const calculateFactorial = (n) => {
    if (n <= 1) {
      return 1;
    }
    return n * calculateFactorial(n - 1);
  };

  const handleCalculate = () => {
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 0) {
      setResult('Please enter a valid non-negative number');
    } else {
      const factorialResult = calculateFactorial(num);
      setResult(`The factorial of ${num} is ${factorialResult}`);
    }
  };

  return (
    <div className="App">
      <h1>Factorial Calculator</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a non-negative number"
      />
      <button onClick={handleCalculate}>Calculate Factorial</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
