import React from 'react';

export const CardMain = function(props) {
    return(
        <div className="container cardMain">
            <img
                className=""
                src={process.env.PUBLIC_URL+"images/" + props.properties.img} alt="logo"/>
            <p className="title">{props.properties.title}</p>
            <p className="text">{props.properties.text}</p>
        </div>
    );
}
