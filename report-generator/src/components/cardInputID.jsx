import React, { Component } from 'react';
import { SpanVerificationGraphic } from './spanVerificationGraphic.jsx';

export class CardInputID extends Component {
    render() {
        let smallClass = "form-text text-muted";
        if (this.props.Smalltext==="*Required" && this.props.Value==="") {
            smallClass = "form-text text-danger";
        }
        return(
            <div className="form-group">
                <label htmlFor="input" className="inputLabel">{this.props.Label}</label>
                    <div className="input-group mb-3">
                        <SpanVerificationGraphic
                            IdVerified={this.props.IdVerified}
                            VerifiedText="ID Correct"
                            NotVerifiedText="ID Incorrect"/>
                        <input id="input" type="text" className="form-control" aria-describedby="Help" placeholder={this.props.Placeholder}
                            onChange={event => this.props.OnChange(event, this.props.Key)}
                            value={this.props.Value}/>
                    </div>
                <small id="Help" className={smallClass}>{this.props.Smalltext}</small>
                <hr/>
            </div>

        );
    }
}
