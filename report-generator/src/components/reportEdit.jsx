import React, { Component } from 'react';
import { ReportPreview } from './reportPreview';
import { InputTextVerify } from './inputTextVerify.jsx';

export class ReportEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userComment: "",
            userId: "",
            userIdVerified: false,
            reportType: "none",
            reportTitle: "report title",
            reportComments: "comments",
            reportDataFileName: "data.json",
            reportId: "125#88#n8"
        }
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(event, key, verified) {
        if (key==="inputId") {
            this.setState({ userId: event.target.value });
            this.setState({ userComment: String(verified) });
        }
        if (key==="comment") {
            this.setState({ userComment: event.target.value });
        }
    }

    render() {
        return(
            <div className="row">
                <form className="reportInputsContainer">
                    <h2>Please fill in the fields</h2>
                    <InputTextVerify
                        Key="inputId"
                        Label="Your personal ID number:*"
                        Placeholder="example: person1"
                        Smalltext="*Required"
                        OnChange={this.handleUserInput}
                        OnClick={this.handleUserInput}
                        Value={this.state.userId}/>
                    <h2>{this.state.userId}</h2>
                    <h2>{this.state.userComment}</h2>
                    <InputTextVerify
                        Key="comment"
                        Label="Your personal Comment:*"
                        Placeholder="example: mpla mpla"
                        Smalltext="*Required"
                        OnChange={this.handleUserInput}
                        OnClick={this.handleUserInput}/>
                </form>
                <ReportPreview />
            </div>
        );
    }
}
