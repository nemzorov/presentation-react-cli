function App() {
  let count = 1;

  const onIncrement = () => {
    count++;
  }

  return (
    <div>
      <input value={count} type="text" readOnly />

      {/* Важно! Передаем ф-ию именно через callback */}
      <button onClick={() => onIncrement()}>increment</button>
    </div>
  )
}

export default App;
