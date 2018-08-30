import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/button.jsx'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "A simple CALCULATOR",
            total: 0,
            tempDisplay: 0,
            numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            operators: ['+', '-', '*', '/', '=', 'C'],
            waitingForOperation: false
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }


    handleOnClick(event) {
        let value;
        if (event.target.value !== '=' && event.target.value !== 'C'){
            if (this.state.tempDisplay === 0){
                value = event.target.value;
            } else {
                value = this.state.tempDisplay + event.target.value;
            }
            this.setState({
                tempDisplay: value
            });
        } else if (event.target.value === 'C') {
            this.setState({
                total: 0,
                tempDisplay: 0
            });
        } else {
            value = eval(String(this.state.tempDisplay));
            this.setState({
                total: value,
                tempDisplay: 0
            });
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">{this.state.title}</h1>
                </header>
                <h2>The Total Amount is:</h2>
                <h2 id="amount-text">{this.state.total}</h2>
                <h3>{this.state.tempDisplay}</h3>
                {this.state.numbers
                    .filter(number => number<=4)
                    .map(number =>
                        <Button
                            class="number"
                            key={number}
                            value={number}
                            OnClick={this.handleOnClick}/>)
                }
                <div className="row"></div>
                {this.state.numbers
                    .filter(number => number>4)
                    .map(number =>
                        <Button
                            class="number"
                            key={number}
                            value={number}
                            OnClick={this.handleOnClick}/>)
                }
                <div className="row"></div>
                {this.state.operators
                    .map(operator =>
                        <Button
                            class="operator"
                            key={operator}
                            value={operator}
                            OnClick={this.handleOnClick}/>)
                }






            </div>
        );
    }
}

export default App;
