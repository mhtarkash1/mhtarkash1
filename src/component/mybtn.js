import React, { Component } from 'react'

export default class Mybtn extends Component {
    render() {
        let backcolor = this.props.backcolor != null ? this.props.backcolor : "#263238"
        let fontcolor = this.props.fontcolor != null ? this.props.fontcolor : '#FAFAFA'
        let txt = this.props.txt != null ? this.props.txt : "ورود"
        let size = this.props.size != null ? this.props.size : "md"
        let heigh

        if (size === "sm") {

            heigh = 20
        } else if (size === "md") {
            heigh = 40

        }
        else {
            heigh = 80
        }


        return (
            <button style={{
                width: 100, height: heigh
                , backgroundColor: backcolor
                , color: fontcolor
                , borderRadius: 15
            }}>{txt}</button>
        )
    }
}
