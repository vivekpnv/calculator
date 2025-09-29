import React, { useState } from 'react';

const App: React.FC = () => {
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);

  const handleAddition = () => setResult((value1 + value2).toString());
  const handleSubtraction = () => setResult((value1 - value2).toString());
  const handleMultiplication = () => setResult((value1 * value2).toString());
  const handleDivision = () => {
    if (value2 === 0) {
      setResult('Error: Division by zero');
    } else {
      setResult((value1 / value2).toString());
    }
  };

  return (
    <div
      style={{
        maxWidth: 350,
        margin: '50px auto',
        padding: 30,
        border: '2px solid #1976d2',
        borderRadius: 12,
        background: '#f5faff',
        boxShadow: '0 4px 16px rgba(25, 118, 210, 0.08)',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }}
    >
      <h2 style={{ color: '#1976d2', textAlign: 'center', marginBottom: 24 }}>Simple Calculator</h2>
      <input
        type="number"
        value={value1}
        onChange={e => setValue1(Number(e.target.value))}
        placeholder="First number"
        style={{
          width: '100%',
          marginBottom: 12,
          padding: 8,
          borderRadius: 6,
          border: '1px solid #bdbdbd',
          fontSize: 16
        }}
      />
      <input
        type="number"
        value={value2}
        onChange={e => setValue2(Number(e.target.value))}
        placeholder="Second number"
        style={{
          width: '100%',
          marginBottom: 18,
          padding: 8,
          borderRadius: 6,
          border: '1px solid #bdbdbd',
          fontSize: 16
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <button
          onClick={handleAddition}
          style={{
            flex: 1,
            marginRight: 8,
            padding: '8px 0',
            background: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          Add
        </button>
        <button
          onClick={handleSubtraction}
          style={{
            flex: 1,
            marginRight: 8,
            padding: '8px 0',
            background: '#388e3c',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          Subtract
        </button>
        <button
          onClick={handleMultiplication}
          style={{
            flex: 1,
            marginRight: 8,
            padding: '8px 0',
            background: '#fbc02d',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          Multiply
        </button>
        <button
          onClick={handleDivision}
          style={{
            flex: 1,
            padding: '8px 0',
            background: '#d32f2f',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          Divide
        </button>
      </div>
      <div style={{ marginTop: 10, textAlign: 'center' }}>
        {result !== null && (
          <h3 style={{ color: result.startsWith('Error') ? '#d32f2f' : '#1976d2' }}>
            Result: {result}
          </h3>
        )}
      </div>
    </div>
  );
};

export default App;