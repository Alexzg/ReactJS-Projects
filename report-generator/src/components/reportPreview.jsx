import React, { Component } from 'react';
import { CardOutput } from './cardOutput.jsx';
import { CardOutputHeading } from './cardOutputHeading.jsx';

export class ReportPreview extends Component {
    render() {
        return (
            <div className="reportPreviewContainer">
                <h2>Report Preview</h2>
                <hr/>

                <div className="row align-items-center">
                    <img
                    className="logo ml-auto"
                    src={process.env.PUBLIC_URL+"images/" + this.props.State.logoName} alt="logo"/>
                    <div className="row">
                        <h3 className=" text-info">Report ID: </h3>
                        <h3>{this.props.State.reportId}</h3>
                    </div>
                </div>

                <div className="mt-5">
                    <CardOutputHeading
                        Title="Name: "
                        Value={this.props.State.userName}/>
                    <CardOutputHeading
                        Title="Surname: "
                        Value={this.props.State.userSurname}/>
                    <CardOutputHeading
                        Title="User Details: "
                        Value="some@other.details"/>
                    <CardOutputHeading
                        Title="Report Type: "
                        Value={this.props.State.reportType}/>
                    <CardOutputHeading
                        Title="Date: "
                        Value={Date()}/>
                </div>

                <CardOutput
                    Title="Project ID: "
                    Value={this.props.State.projectID}/>
                <CardOutput
                    Title="Report Title: "
                    Value={this.props.State.reportTitle}/>
                <CardOutput
                    Title="Team: "
                    Value={this.props.State.projectResearcher.join(", ")}/>
                <CardOutput
                    Title="Project Description: "
                    Value={this.props.State.projectDesctiption}/>
                <CardOutput
                    Title="Extra details (comments): "
                    Value={this.props.State.reportComments}/>

            </div>
        );
    }
}
