import React from 'react';
import Container from './components/Container'
import Button from './components/Button'
import Mustache from 'mustache';
import _ from 'lodash'

const ComponentsMap = {
    'Container': Container,
    'Button': Button
}

window.EASY = {};

function render(config, store) {
    let props = Object.assign({}, config.props);
    
    for (const key in props) {
        if (props.hasOwnProperty(key)) {
            const element = props[key];
            if (typeof element === 'string') {
                props[key] = Mustache.render(element, store);
            }
        }
    }
    
    return React.createElement(
        ComponentsMap[config.component],
        props,
        config.children && config.children.map(c => render(c, store))
    );
}
class  SDK extends React.Component {
    
    constructor(props) {
        super();
        this.state = props.store;
        const actions = Function(props.action.source)();
        let self = this;
        for (const key in actions) {
            if (actions.hasOwnProperty(key)) {
                const fn = actions[key];
                window.EASY[key] = function() {
                    fn(self);
                }
            }
        }
    }

    render() {
        const store = Object.assign({}, this.state);
        let cps = render(this.props.layout, store);
        return <>
            {cps}
        </>
    }
}

export default SDK;
