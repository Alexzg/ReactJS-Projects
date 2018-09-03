import React, { Component } from 'react';
import { Button } from './button.jsx'

export class CardButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            cardButtons: {
                like: {
                    count: 0,
                    icon: "fa fa-heart"
                },
                forwards: {
                    count: 0,
                    icon: "fa fa-cloud-upload"
                },
                comments: {
                    count: 0,
                    icon: "fa fa-comments"
                }
            }
        }
        this.updateCount = this.updateCount.bind(this);
    }
    updateCount(event, count, buttonType) {
        let value = {...this.state.cardButtons};// copy object
        switch (buttonType) {
            case ("like"):
                value.like.count += 1;//update the value I want
                break;
            case ("forwards"):
                value.forwards.count += 1;//update the value I want
                break;
            case ("comments"):
                value.comments.count += 1;//update the value I want
                break;
            default:
                break;
        }
        this.setState({
            value: value//update state using the "copy object"
        });
    }
    render(){
        return(
            <div className="container btn-group">
                <Button
                    Class={this.state.cardButtons.like}
                    OnClick={this.updateCount}
                    Type="like"/>
                <Button
                    Class={this.state.cardButtons.forwards}
                    OnClick={this.updateCount}
                    Type="forwards"/>
                <Button
                    Class={this.state.cardButtons.comments}
                    OnClick={this.updateCount}
                    Type="comments"/>
            </div>
        );
    }
}
