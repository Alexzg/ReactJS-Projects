import React, { Component } from 'react';

export class InputReportType extends Component {
    render() {
        return(
            <div className="form-group">
                <label htmlFor="inputType" className="inputLabel">{this.props.Label}</label>
                <select className="form-control" id="inputType"
                    onClick={event => this.props.OnClick(event, this.props.Key)}>
                    <option selected disabled value="">Choose option</option>
                    <option value={this.props.Option1}>{this.props.Option1}</option>
                    <option value={this.props.Option2}>{this.props.Option2}</option>
                    <option value={this.props.Option3}>{this.props.Option3}</option>
                </select>
            </div>

        );
    }
}
