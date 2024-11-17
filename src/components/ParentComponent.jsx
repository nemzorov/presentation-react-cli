const ParentComponent = (props) => {
    return (
        // используем react фрагмент <></>
        <>
            <h1>Родительский компонент</h1>
            {props.children} {/* Дочерний компонент получаем из пропсов */}
        </>
    )
}

export default ParentComponent;