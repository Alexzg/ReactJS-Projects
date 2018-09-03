import React from 'react';

export const CardHeading = function(props) {
    return(
        <div className="container cardHeading">
            <div className="row">
                <img
                    className="logo"
                    src={process.env.PUBLIC_URL+"images/" + props.properties.logo} alt="logo"/>
                <div>
                    <h4 >{props.properties.title}</h4>
                    <h5>{props.properties.titleSecond} -{props.properties.author}</h5>
                </div>
                <h3>
                    {props.properties.text}
                </h3>

            </div>
        </div>
    );
}
