import React, { Component } from 'react';
import { user } from '../submittedUserID.json'; //Simulates external file from backend for -> User Verification Status
import { project } from '../submittedProjectID.json'; //Simulates external file from backend for -> Project Verification Status
import { ReportPreview } from './reportPreview.jsx';
import { UserWelcome } from './userWelcome.jsx';
import { InputTextID } from './inputTextID.jsx';
import { InputReportType } from './inputReportType.jsx';
import { CardInputComments } from './cardInputComments.jsx';
import { ButtonSubmitForm } from './buttonSubmitForm.jsx';
import { CardInputID } from './cardInputID.jsx';
import { CardResultFIleInput } from './cardResultFileInput.jsx';
import { CardInputText } from './cardInputText.jsx'

export class ReportEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            userName: user.name,
            userSurname: user.surname,
            userIdVerified: (user.verifiedUserID==="true"), //changes text to boolean
            reportType: "",
            projectID: "",
            projectExist: (project.verifiedID==="true"),
            projectTitle: project.title,
            projectResearcher: project.researcher,
            projectDesctiption: project.description,
            projectResultFile: null,
            reportTitle: "",
            reportComments: "",
            reportId: "125#88#n8"
        }
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(event, key) {
        if (key==="inputId") {
            this.setState({ userId: event.target.value });
        }
        if (key==="reportType") {
            this.setState({
                reportType: event.target.value,
                reportTitle: ""
            });
        }
        if (key==="cardProjectID") {
            this.setState({ projectID: event.target.value });
        }
        if (key==="fileUpload") {
            this.setState({ projectResultFile: event.target.files });
        }
        if (key==="inputComments") {
            this.setState({ reportComments: event.target.value });
        }
        if (key==="inputText") {
            this.setState({ reportTitle: event.target.value });
        }
    }

    displayReportMainInput() {
        return(
            <div>
                <UserWelcome
                    verified={this.state.userIdVerified}
                    userName={this.state.userName}/>
                <InputTextID
                    Key="inputId"
                    Label="Your personal ID number:*"
                    Placeholder="e.g. p3rs@n1"
                    Smalltext="*Required"
                    OnChange={this.handleUserInput}
                    Value={this.state.userId}
                    IdVerified={this.state.userIdVerified}/>
                <InputReportType
                    Key="reportType"
                    Label="Please chooce Report Type"
                    OnClick={this.handleUserInput}
                    Option1="Results"
                    Option2="Issue"
                    Option3="Proposal"/>
            </div>
        );
    }

    displayReportTypeInput() {
        let value = null;
        let userIdVerified = this.state.userIdVerified;
        let reportType = this.state.reportType;
        if (reportType==="Results" && userIdVerified) {
            value = (
                <div>
                    <CardInputID
                        Key="cardProjectID"
                        Label="Project ID:*"
                        Placeholder="e.g. t3st!"
                        Smalltext="*Required"
                        OnChange={this.handleUserInput}
                        Value={this.state.projectID}
                        IdVerified={this.state.projectExist}/>
                    <CardResultFIleInput
                        Key="fileUpload"
                        Label="Upload files"
                        OnChange={this.handleUserInput}/>
                    <CardInputComments
                        Key="inputComments"
                        Label="Comments"
                        Placeholder="e.g. I am a comment..."
                        OnChange={this.handleUserInput}
                        Value={this.state.reportComments}/>
                    <ButtonSubmitForm
                        IdVerified={this.state.projectExist}/>
                </div>
        );}
        if ((reportType==="Issue"||reportType==="Proposal") && userIdVerified) {
            value = (
                <div>
                    <CardInputID
                        Key="cardProjectID"
                        Label="Project ID:*"
                        Placeholder="e.g. t3st!"
                        Smalltext="*Optional"
                        OnChange={this.handleUserInput}
                        Value={this.state.projectID}
                        IdVerified={this.state.projectExist}/>
                    <CardInputText
                        Key="inputText"
                        Label="Give a title to your report*"
                        Placeholder="e.g. Report on behavioral issues"
                        Smalltext="*Required"
                        OnChange={this.handleUserInput}
                        Value={this.state.reportTitle}/>
                    <CardInputComments
                        Key="inputComments"
                        Label="Provide details"
                        Placeholder="e.g. I am a detail..."
                        OnChange={this.handleUserInput}
                        Value={this.state.reportComments}/>
                    <ButtonSubmitForm
                        IdVerified={this.state.projectExist}/>
                </div>
        );}
        return(value);
    }

    submitHandler(event) {
        event.preventDefault();
    }

    render() {
        return(
            <div className="row">
                <form className="reportInputsContainer" onSubmit={this.submitHandler}>
                    <h2>Please fill in the fields</h2>
                    {this.displayReportMainInput()}
                    <h3>Report Type: {this.state.reportType}</h3>
                    {this.displayReportTypeInput()}

                    <h2>TEst: {String(this.state.reportTitle)}</h2>
                </form>
                <ReportPreview />
            </div>
        );
    }
}
