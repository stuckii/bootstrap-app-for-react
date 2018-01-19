import React from 'react';

const Topic = ({match}) => (
    <div>
        <div>
            {match.url}
        </div>
        <hr/>
        <div>
            {
                match.params.forEach(function(o) {
                    return o;
                })
            }
        </div>
    </div>
);

export default Topic;