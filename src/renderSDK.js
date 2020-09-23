import React from 'react';
import Container from './components/Container'
import Button from './components/Button'
import Mustache from 'mustache';
const ComponentsMap = {
    'Container': Container,
    'Button': Button
}

window.EASY = {};
Mustache.templateCache = undefined;
function render(config, store) {
    let props = config.props;
    for (const key in props) {
        if (props.hasOwnProperty(key)) {
            const element = props[key];
            if (typeof element === 'string') {
                console.log('name:',store.name)
                props[key] = Mustache.render(element, store);
                console.log(props[key])
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
        const {name} = store;
        let cps = render(this.props.layout, store);
        return <>
            {cps}
            {name}
        </>
    }
}

export default SDK;
