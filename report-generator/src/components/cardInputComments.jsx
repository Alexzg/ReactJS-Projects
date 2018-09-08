import React, { Component } from 'react';

export class CardInputComments extends Component {
    render() {
        return(
            <div className="form-group">
                <label htmlFor="input" className="inputLabel">{this.props.Label}</label>
                    <div className="input-group mb-3">
                        <textarea id="input" type="text" className="form-control" rows="4" placeholder={this.props.Placeholder}
                            onChange={event => this.props.OnChange(event, this.props.Key)}
                            value={this.props.Value}/>
                    </div>
            </div>

        );
    }
}
