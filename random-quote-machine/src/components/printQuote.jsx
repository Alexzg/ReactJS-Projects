import React from 'react';

export const PrintQuote = function(props){
    return(
        <div className="text-container">
            <h2>
                "{props.quote}"
            </h2>
            <hr/>
            <h3>
                -{props.author}
            </h3>
        </div>
    );
}
