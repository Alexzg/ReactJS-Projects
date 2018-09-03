import React from 'react';

export const Button = function(props) {
    let count = props.Class.count;
    let icon = props.Class.icon;
    let buttonType = props.Type;
    return(
        <button
            className="btn btn-lg"
            onClick={(event) => props.OnClick(event, count,  buttonType)}>
            {count}
            <i className={icon}></i>
        </button>
    );
}
