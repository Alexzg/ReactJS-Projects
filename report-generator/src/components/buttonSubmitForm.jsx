import React, { Component } from 'react';

export class ButtonSubmitForm extends Component {
    chooseMode(IdVerified) {
        let cls = null;
        if (IdVerified) {
            cls = "btn btn-outline-primary";
        } else {
            cls = "btn disabled";
        }
        return(cls)
    }

    render() {
        let cls = this.chooseMode(this.props.IdVerified);
        return(
            <div className="form-group">
                <button type="button" className={cls} data-toggle="modal" data-target="#SubmitModal">
                    SUBMIT Report
                </button>
            </div>
        );
    }
}
