import React, { Component } from 'react';
import { CardHeading } from './cardHeading.jsx';
import { CardMain } from './cardMain.jsx';
import { CardButtons } from './cardButtons.jsx';

export class SocialCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardHeading: {
                logo: "tree.png",
                title: "The Dev example",
                titleSecond: "@thisIsAnExample",
                text: "Working with ReactJS",
                author: "alexzg"
            },
            cardMain: {
                img: "letter_a.png",
                title: "Social Card React",
                text: "This is where it starts!"
            }
        }
    }

    render() {
        return(
            <div className="mainContainer">
                <CardHeading
                    properties={this.state.cardHeading}/>
                <CardMain
                    properties={this.state.cardMain}/>
                <CardButtons
                    properties={this.state.cardButtons}/>
            </div>
        );
    }
}
