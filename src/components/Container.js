import React from 'react';

const containerStyles = {
    padding: '20px',
    marginTop: "10px",
    border:'1px solid #000',
    textAlign: 'left'
}
class Container extends React.Component {
    
    render () {
        const {text} = this.props;
        return <div style={containerStyles}>
            {text}
            {this.props.children}
        </div>
    }
}

export default Container;

