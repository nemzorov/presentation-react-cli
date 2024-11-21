import { useState } from 'react';

function App() {
  // let count = 1;

  const [count, setCount] = useState(0);

  const onIncrement = () => {
    // count++;
    setCount(prevState => ++prevState);
  }

  return (
    <div>
      <input value={count} type="text" readOnly />

      <button onClick={onIncrement}>increment</button>
    </div>
  )
}

export default App;
