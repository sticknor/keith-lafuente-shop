// React
import React from 'react';
import PropTypes from 'prop-types'

function FilipinoFashionHistory(props) {

    const {
        filipinoFashionHistory
    } = props;

    return (
        <div className="template-container">
            <div className="template-content">
                <div className="template-title">
                    filipino fashion history
                </div>
                <div>
                    {filipinoFashionHistory.map((paragraph, index) => {
                        return <p key={index}>{paragraph}</p>
                    })}
                </div>
            </div>
        </div>
    );
}

FilipinoFashionHistory.propTypes = {
    filipinoFashionHistory: PropTypes.array
}

export default FilipinoFashionHistory;
