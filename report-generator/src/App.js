import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ReportSubmitted } from './components/reportSubmitted.jsx';
import { ReportEdit } from './components/reportEdit.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reportSubmitted: false,
            userId: "",
            userIdVerified: false,
            reportType: "none",
            reportTitle: "report title",
            reportComments: "comments",
            reportDataFileName: "data.json",
            reportId: "125#88#n8"
        }
        this.updateState = this.updateState.bind(this);
    }

    choosePage() {
        let reportEdit =
        <ReportEdit
            UpdateReportState={this.updateState}/>;
        let reportSubmitted =
        <ReportSubmitted/>;
        let page = (this.state.reportSubmitted===false ? reportEdit : reportSubmitted);
        return (page);

    }

    updateState(event, reportEditState) {
        let userId = reportEditState.userId;
        let userIdVerified = reportEditState.userIdVerified;
        this.setState({
            userId: userId,
            userIdVerified: userIdVerified
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Report Generator</h1>
                </header>
                {this.choosePage()}
                <h2>{this.state.userId} : {String(this.state.userIdVerified)}</h2>
            </div>
        );
    }
}

export default App;
