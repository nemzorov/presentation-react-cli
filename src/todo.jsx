const Todo = ({ id, todo }) => {
    return (
        <div className="todo">
            <div>{todo}</div>
            <button>Вполнить</button>
            <button>Удалить</button>
        </div>
    )
}

export default Todo;