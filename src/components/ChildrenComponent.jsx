const ChildComponent = (props) => {
    return (
        // пропс name пришел из компонента App
        <h2>Дочерний компонент {props.name}</h2>
    )
}

export default ChildComponent;