import React, { Component } from 'react';
import { verifiedUserID } from '../submittedUserID.json'; //Simulates external file from backend for -> User Verification Status
import { ReportPreview } from './reportPreview.jsx';
import { InputTextID } from './inputTextID.jsx';

export class ReportEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userComment: "",
            userId: "",
            userIdVerified: (verifiedUserID==="true"),
            reportType: "none",
            reportTitle: "report title",
            reportComments: "comments",
            reportDataFileName: "data.json",
            reportId: "125#88#n8"
        }
        this.handleUserID = this.handleUserID.bind(this);
    }

    handleUserID(event, key) {
        if (key==="inputId") {
            this.setState({ userId: event.target.value });
        }
    }

    render() {
        return(
            <div className="row">
                <form className="reportInputsContainer">
                    <h2>Please fill in the fields</h2>
                    <InputTextID
                        Key="inputId"
                        Label="Your personal ID number:*"
                        Placeholder="example: person1"
                        Smalltext="*Required"
                        OnChange={this.handleUserID}
                        OnClick={this.handleUserID}
                        Value={this.state.userId}
                        UserIdVerified={this.state.userIdVerified}/>

                    <h2>{this.state.userId}</h2>

                    <h2>{String(this.state.userIdVerified)}</h2>
                    <input id="input" type="text" className="form-control" aria-describedby="Help"/>
                </form>
                <ReportPreview />
            </div>
        );
    }
}
