import React, { useState } from 'react';

const App: React.FC = () => {
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const handleAddition = () => setResult(value1 + value2);
  const handleSubtraction = () => setResult(value1 - value2);
  const handleMultiplication = () => setResult(value1 * value2); // Added multiplication

  return (
    <div style={{ maxWidth: 300, margin: '50px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Simple Calculator with designs</h2>
      <input
        type="number"
        value={value1}
        onChange={e => setValue1(Number(e.target.value))}
        placeholder="First number"
        style={{ width: '100%', marginBottom: 10 }}
      />
      <input
        type="number"
        value={value2}
        onChange={e => setValue2(Number(e.target.value))}
        placeholder="Second number"
        style={{ width: '100%', marginBottom: 10 }}
      />
      <div>
        <button onClick={handleAddition} style={{ marginRight: 10 }}>Add</button>
        <button onClick={handleSubtraction} style={{ marginRight: 10 }}>Subtract</button>
        <button onClick={handleMultiplication}>Multiply</button>
      </div>
      <div style={{ marginTop: 20 }}>
        {result !== null && <h3>Result: {result}</h3>}
      </div>
    </div>
  );
};

export default App;