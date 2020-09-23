import React from 'react'

class Button extends React.Component {

    onClick = () => {
        const {onClick} =  this.props;
        const {action } = onClick;
        window.EASY[action]();
    }
    render (){
        const {text} = this.props;
        return <button onClick={this.onClick}>
            {text}
        </button>
    }
}

export default Button;