// React
import React from 'react';
import PropTypes from 'prop-types'
function Faq(props) {

  const {
    faqs
  } = props;

  return (
    <div className="faq">
      <div className="faq-content">
        <div className="faq-title">faq</div>
        {faqs.map((faq, index) => {
          return (
            <div key={index}>
              <div className="faq-question">
                {faq.question}
              </div>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

Faq.propTypes = {
  faqs: PropTypes.array
}

export default Faq;