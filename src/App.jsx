import { useEffect, useState } from 'react';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data.todos))
  }, [])


  return (
    <div>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <Todo todo={item.todo} />
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App;
