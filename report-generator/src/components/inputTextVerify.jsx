import React, { Component } from 'react';
import { personnel } from '../database.json';

export class InputTextVerify extends Component {
    createVerifyGraphic() {
        let userIdVerified=false;
        let className="";
        let text="";
        let databaseId = (personnel
                        .map(person => person.id===this.props.Value)
                        .reduce(id => id===true));
        if (databaseId) {
            userIdVerified = true;
            className = "btn btn-success";
            text = "Verified ID";
        } else {
            userIdVerified = false;
            className = "btn";
            text = "Incorrect ID"
        }
        return(
            <div className="input-group-prepend">
                <span type="text" className={className}>{text}</span>
            </div>
        );
    }

    render() {
        return(
            <div className="form-group">
                <label htmlFor="input">{this.props.Label}</label>
                    <div className="input-group mb-3">
                        {this.createVerifyGraphic()}
                        <input id="input" type="text" className="form-control" aria-describedby="Help" placeholder={this.props.Placeholder}
                            onChange={event => this.props.OnChange(event, this.props.Key, false)}
                            onClick={event => this.props.OnClick(event, this.props.Key, false)}
                            value = {this.props.Value}/>
                    </div>
                <small id="Help" className="form-text text-muted">{this.props.Smalltext}</small>
            </div>

        );
    }
}
