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
        }
    }

    choosePage() {
        let reportEdit =
        <ReportEdit/>;
        let reportSubmitted =
        <ReportSubmitted/>;
        let page = (this.state.reportSubmitted===false ? reportEdit : reportSubmitted);
        return (page);

    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Report Generator</h1>
                </header>
                {this.choosePage()}
            </div>
        );
    }
}

export default App;
