import { useState } from 'react';

function App() {
  const items = ['Иван', 'Василий', 'Петр']; // условные данные из вне

  const [data, setData] = useState(items);
  const [value, setValue] = useState('');

  const addName = (name) => {
    // if (!name) return;
    setData(prevState => [...prevState, name]);
    // setValue(''); // занулить value
  }

  return (
    <div>
      <ul>
        {data.map((name, index) => <li key={index}>{name}</li>)} {/* важно указать key */}
      </ul>
      <input value={value} onChange={e => setValue(e.target.value)} type="text" />
      <button onClick={() => addName(value)}>Добавить имя</button>
    </div>
  )
}

export default App;
