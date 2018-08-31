import React, { Component } from 'react';

export class Button extends Component {
    render() {
        return(
            <button
                className="btn btn-outline-success"
                onClick={this.props.OnClick}>
                Click me
            </button>
        )
    }
}
