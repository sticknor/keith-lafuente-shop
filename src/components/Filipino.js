// React
import React from 'react';
import PropTypes from 'prop-types'

function Filipino(props) {

    const {
        filipino
    } = props;

    return (
        <div className="template-container">
            <div className="template-content">
                <div className="template-title">
                    filipino
                </div>
                <div>
                    {filipino.map((paragraph, index) => {
                        return <p key={index}>{paragraph}</p>
                    })}
                </div>
            </div>
        </div>
    );
}

Filipino.propTypes = {
    filipino: PropTypes.array
}

export default Filipino;
