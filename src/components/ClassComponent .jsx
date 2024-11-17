import { Component } from "react";

class ClassComponent extends Component {
    render() {
        return <p>Я {this.props.name} компонент</p>
    }
}

export default ClassComponent;