import React, { Component } from 'react';
import { SpanVerificationGraphic } from './spanVerificationGraphic.jsx';

export class InputTextID extends Component {
    render() {
        return(
            <div className="form-group">
                <label htmlFor="input">{this.props.Label}</label>
                    <div className="input-group mb-3">
                        <SpanVerificationGraphic
                            userIdVerified={this.props.UserIdVerified}/>
                        <input id="input" type="text" className="form-control" aria-describedby="Help" placeholder={this.props.Placeholder}
                            onChange={event => this.props.OnChange(event, this.props.Key)}
                            onClick={event => this.props.OnClick(event, this.props.Key)}
                            value={this.props.Value}/>
                    </div>
                <small id="Help" className="form-text text-muted">{this.props.Smalltext}</small>
            </div>

        );
    }
}
