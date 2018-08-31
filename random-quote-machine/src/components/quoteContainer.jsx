import React, { Component } from 'react';
import { quotes } from '../quotes.json';
import { PrintQuote } from './printQuote.jsx';
import { Button } from './button.jsx';

export class QuoteContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            quote: "",
            author: ""
        };
        this.updateQuote = this.updateQuote.bind(this);
    }

    componentWillMount() {
        this.updateQuote();
    }

    updateQuote() {
        let author, quote;
        let randomNum = Math.floor((Math.random() * 10));
        quotes
        .filter(obj => obj.id===String(randomNum))
        .map(function(obj){
            quote = obj.quote;
            author = obj.author;
            return(null);
        });
        this.setState({
            quote: quote,
            author: author
        });
    }

    render() {
        return (
            <div className="quote-container">
                    <Button
                        OnClick={this.updateQuote}/>
                    <PrintQuote
                        quote={this.state.quote}
                        author={this.state.author}/>
            </div>);
    }
}
