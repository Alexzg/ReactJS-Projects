import React, { Component } from 'react';

export class CardOutput extends Component {
    render() {
        let title;
        this.props.Value==="" ? title=null : title=this.props.Title;
        return(
            <div className="container m-4">
                <h5 className="text-warning">{title}</h5>
                <h5>{this.props.Value}</h5>
            </div>

        );
    }
}
