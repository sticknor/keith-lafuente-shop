// React
import React from 'react';
import PropTypes from 'prop-types'

function Stockists(props) {

    const {
        stockists
    } = props;

    console.log(stockists)
    console.log(props);

    return (
        <div className="template-container">
            <div className="template-content">
                <div className="template-title">
                    Stockists
                </div>
                <div>
                    {stockists.map((stockist, index) => {
                        return <a key={index} className="stockist-link" href={stockist.link} target="_blank" rel='noreferrer noopener'>{stockist.name}</a>;
                    })}
                </div>
            </div>
        </div>
    );
}

Stockists.propTypes = {
    stockists: PropTypes.array
}

export default Stockists;
