import React, { Component } from 'react';
import { InputText } from './inputText.jsx';
import { personnel } from '../database.json';

export class ReportEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            userComment: "",
            userIdVerified: false
        }
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(event, key) {
        if (key==="inputId") {
            let userIdVerified;
            let databaseId = (personnel
                            .map(person => person.id===this.state.userId)
                            .reduce(id => id===true));
            if (databaseId) {
                userIdVerified = true;
            } else {
                userIdVerified = false;
            }
            this.setState({ userIdVerified : userIdVerified })
            this.setState({ userId: event.target.value });
        }
        if (key==="comment") {
            this.setState({ userComment: event.target.value });
        }
    }

    render() {
        return(
            <div className="row">
                <form className="reportInputsContainer"
                    onBlur={event => this.props.UpdateReportState(event, this.state)}>
                    <h2>Please fill in the fields</h2>
                    <InputText
                        Key="inputId"
                        Label="Your personal ID number:*"
                        Placeholder="example: person1"
                        Smalltext="*Required"
                        OnChange={this.handleUserInput}
                        OnClick={this.handleUserInput}
                        UserIdVerified={this.state.userIdVerified}/>
                    <InputText
                        Key="comment"
                        Label="Your personal Comment:*"
                        Placeholder="example: mpla mpla"
                        Smalltext="*Required"
                        OnChange={this.handleUserInput}
                        OnClick={this.handleUserInput}/>
                </form>
                <div className="reportPreviewContainer displayContainer">
                    <h2>Report Preview</h2>
                </div>
            </div>
        );
    }
}
