import React, { Component } from 'react';

export class CardResultFIleInput extends Component {
    render() {
        return(
            <div className="form-group">
                <label htmlFor="file-input" className="inputLabel">{this.props.Label}</label>
                <div className="custom-file">
                    <input id="file-input" type="file" className="form-control-file"
                        onChange={event => this.props.OnChange(event, this.props.Key)}/>
                </div>
                <hr/>
            </div>
        );
    }
}
