import React from 'react';

export const SpanVerificationGraphic = function(props) {
    let spanGraphicClass="";
    let spanGraphicText="";
    if (props.userIdVerified) {
        spanGraphicClass= "btn btn-outline-success";
        spanGraphicText= "Verified ID";
    } else {
        spanGraphicClass= "btn btn-warning";
        spanGraphicText= "Verify ID";
    }
    return(
        <div className="input-group-prepend">
            <span type="text" className={spanGraphicClass}>{spanGraphicText}</span>
        </div>
    );
}
