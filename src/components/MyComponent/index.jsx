import style from './style.module.css'
// style можно назвать как угодно (это объект со стилями)

const MyComponent = () => {
    return (
        <div className={style.wrapper}>
            <h1 className={style.title}>My Component</h1>
            <p className={style.text}>This is a React component.</p>
        </div>
    )
}

export default MyComponent;