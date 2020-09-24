
export default {
    action:{
        source:`return { add(ctx) { ctx.setState({name:"董伦涛"})} }`
    },
    store: {
        name:'xiaohong',
        user:{
            name:'小明',
            age:24
        }
    },
    layout: {
        component: 'Container',
        props: {
            text: '1111',
        },
        children: [{
            component: 'Button',
            props: {
                text:'点我',
                onClick:{
                    action: 'add'
                }
            }
        },{
            component: 'Container',
            props: {
                text: '姓名：{{name}}；年龄：{{user.age}}',
            },
            children: [{
                component: 'Container',
                props: {
                    text: '22223333',
                }
            }]
        },{
            component: 'Container',
            props: {
                text: '3333',
            }
        }, {
            component: 'Container',
            props: {
                text: '4444',
            }
        }]
    }
}