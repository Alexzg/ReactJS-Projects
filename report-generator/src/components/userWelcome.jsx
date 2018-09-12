import React from 'react';

export const UserWelcome = function(props) {
    let value;
    if (props.verified) {
        value = (<div><h2 className="textTitleColor">{"Hello " + props.userName}</h2></div>);
    } else {
        value = null;
    }
    return(value);
}
