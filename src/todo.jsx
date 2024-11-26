import clsx from 'clsx';

const Todo = ({ id, todo, completed, onDelete, onComplete }) => {
    return (
        <div className={clsx('todo', completed && 'todo--completed')}>
            <div>{todo}</div>
            <button onClick={() => onComplete(id, !completed)}>{completed ? 'Вернуть' : 'Вполнить'}</button>
            <button onClick={() => onDelete(id)}>Удалить</button>
        </div>
    )
}

export default Todo;