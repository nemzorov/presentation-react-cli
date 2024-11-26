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

  const onComplete = (id, completed) => {
    setTodos(todos.map(item => item.id === id ? { ...item, completed } : item));
  }

  const onDelete = (id) => {
    confirm('Вы действительно хотите удалить?') &&
      setTodos(todos.filter(item => item.id !== id));
  }


  return (
    <div>
      {loading ?
        <span>Загрузка...</span>
        :
        <ul>
          {todos.map((item, index) => (
            <li key={index}>
              <Todo id={item.id} todo={item.todo} completed={item.completed} onDelete={onDelete} onComplete={onComplete} />
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default App;
