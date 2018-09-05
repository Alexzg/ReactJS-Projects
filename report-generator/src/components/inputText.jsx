import React, { Component } from 'react';

export class InputText extends Component {
    // Fake Button when clicked -> adds 1 extra onChange -> all the states of components are fully updated
    createFakeButton() {
        if (this.props.Key==="inputId" && this.props.UserIdVerified===false) {
            return(
                <div className="input-group-prepend">
                    <button onClick={event => this.props.OnClick(event, this.props.Key)} 
                        type="text" className="" id="basic-addon1">Verify ID</button>
                </div>
            );
        }
    }
    render() {
        return(
            <div className="form-group">
                <label htmlFor="input">{this.props.Label}</label>
                    <div className="input-group mb-3">
                        {this.createFakeButton()}
                        <input id="input" type="text" className="form-control" aria-describedby="Help" placeholder={this.props.Placeholder}
                            onChange={event => this.props.OnChange(event, this.props.Key)}
                            onClick={event => this.props.OnClick(event, this.props.Key)}/>
                    </div>
                <small id="Help" className="form-text text-muted">{this.props.Smalltext}</small>
            </div>

        );
    }
}
