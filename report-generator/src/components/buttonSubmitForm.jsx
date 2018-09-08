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
                <button type="submit" className={cls}
                    >SUBMIT Report</button>
            </div>
        );
    }
}
