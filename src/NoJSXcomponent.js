import React from "react";

const NoJSXcomponent = () => {
    return (
        React.createElement('div', { key: 1 },
            React.createElement('h1', { key: 2 }, 'No JSX component'),
            React.createElement('ul', { key: 3 },
                [
                    React.createElement('li', { key: 4 }, 'Больший объем кода'),
                    React.createElement('li', { key: 5 }, 'Плохо читаемый синтаксис')
                ]
            )
        )
    )
}

export default NoJSXcomponent;