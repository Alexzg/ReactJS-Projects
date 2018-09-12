import React, { Component } from 'react';

export class CardOutputHeading extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-3 text-right text-info">
                    <p>{this.props.Title}</p>
                </div>
                <div className="col text-left">
                    <h5>{this.props.Value}</h5>
                </div>
            </div>
        );
    }
}
