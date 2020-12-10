import React, { Component } from 'react'

export default class Output extends Component {
    render() {
        let {result} = this.props
        return (
            <div id="display">
                <span>{result}</span>
            </div>
        )
    }
}
