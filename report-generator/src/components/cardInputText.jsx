import React, { Component } from 'react';

export class CardInputText extends Component {
    render() {
        let smallClass = "form-text text-danger";
        let inputClass = "form-control";
        if (this.props.Key==="inputTitle" && this.props.Value!=="") {
            smallClass = "form-text text-success";
            inputClass = "form-control border-success";
        }
        return(
            <div className="form-group">
                <label htmlFor="input" className="inputLabel">{this.props.Label}</label>
                    <div className="input-group mb-3">
                        <input id="input" type="text" className={inputClass} aria-describedby="Help" placeholder={this.props.Placeholder}
                            onChange={event => this.props.OnChange(event, this.props.Key)}
                            value={this.props.Value}/>
                    </div>
                <small id="Help" className={smallClass}>{this.props.Smalltext}</small>
                <hr/>
            </div>

        );
    }
}
