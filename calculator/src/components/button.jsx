import React, { Component } from 'react';

export class Button extends Component {


    render() {
        let buttonClass = "btn";
        buttonClass += this.props.class==="number"? " btn-primary" : this.props.value==="C"? " btn-danger" : " btn-warning";
        return (
            <button
                type="button"
                className={buttonClass}
                onClick={this.props.OnClick}
                value={this.props.value}
                >
                {this.props.value}
            </button>
        );
    }
}

// Button.propTypes = {
//   type: React.PropTypes.string.isRequired,
//   handleClick: React.PropTypes.func.isRequired,
//   label: React.PropTypes.string.isRequired
// }
