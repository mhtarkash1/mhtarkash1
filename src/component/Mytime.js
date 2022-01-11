import React, { Component } from 'react'

export default class Mytime extends Component {

    constructor(props) {
        super(props)

        this.state = {
            time: new Date().toLocaleTimeString()
        }

        setInterval(() => {
            this.setState({
                time : new Date().toLocaleTimeString()
            })
        }, 1000);

    }

    render() {
        //let time = new Date().toLocaleTimeString()
        return (

            <div style={{ width: 100, height: 40, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <span>{this.state.time}</span>
            </div>
        )
    }
}
