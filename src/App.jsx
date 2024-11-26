import { useEffect, useState } from 'react';
import Todo from './Todo';

function App() {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data.todos))
  }, [])

  useEffect(() => {
    if (!todos.length) return;
    setLoading(false);
  }, [todos])


  return (
    <div>
      {loading ?
        <span>Загрузка...</span>
        :
        <ul>
          {todos.map((item, index) => (
            <li key={index}>
              <Todo todo={item.todo} />
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default App;
