import React, { Component } from 'react';

export class CardInputText extends Component {
    render() {
        return(
            <div className="form-group">
                <label htmlFor="input" className="inputLabel">{this.props.Label}</label>
                    <div className="input-group mb-3">
                        <input id="input" type="text" className="form-control" aria-describedby="Help" placeholder={this.props.Placeholder}
                            onChange={event => this.props.OnChange(event, this.props.Key)}
                            value={this.props.Value}/>
                    </div>
                <small id="Help" className="form-text text-muted">{this.props.Smalltext}</small>
            </div>

        );
    }
}
