import React from 'react';

export const SpanVerificationGraphic = function(props) {
    let spanGraphicClass="";
    let spanGraphicText="";
    if (props.IdVerified) {
        spanGraphicClass= "btn btn-outline-success";
        spanGraphicText= props.VerifiedText ;
    } else {
        spanGraphicClass= "btn btn-warning";
        spanGraphicText= props.NotVerifiedText;
    }
    return(
        <div className="input-group-prepend">
            <span type="text" className={spanGraphicClass}>{spanGraphicText}</span>
        </div>
    );
}
