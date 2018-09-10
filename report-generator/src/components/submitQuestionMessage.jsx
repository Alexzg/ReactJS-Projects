import React, { Component } from 'react';

export class SubmitQuestionMessage extends Component {
    render() {
        return(
            <div className="modal fade" id="SubmitModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="SubmitModalLabel">Are you ready to submit?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Pressing "Submit" will result<br/>in permanent stop of the Report Editting...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-warning" data-dismiss="modal"
                                onClick={event => this.props.OnClick(event, this.props.Key)}>SUBMIT Report</button>
                                <button type="button" className="btn btn-outline-success" data-dismiss="modal">EDIT Report</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
