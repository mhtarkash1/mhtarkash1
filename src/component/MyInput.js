import React, { Component } from 'react'

export default class MyInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false
        }
    }
    

    render() {
        var regex = this.props.regex 
        // /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/
        var errortext = this.props.errortext
        return (
            <div style={{
                color: "#000", width: '100%',
                padding: 15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }} >
                <input onBlur={(e) => {
                    var val = e.target.value
                    var emailreg = regex

                    this.setState({
                        error: !emailreg.test(val)
                    }
                    )

                }} style={{ width: "80%", borderbottom: "3px solid #000" }} type="text" ></input>
                {this.state.error ? (
                    <span style={{ fontSize: 10, color: "red", marginTop: 5 }}>{errortext}</span>
                ) : (
                    null
                )}

            </div>
        )
    }
}
