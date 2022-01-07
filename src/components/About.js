// React
import React from 'react';
import PropTypes from 'prop-types'

function About(props) {

  const {
    about,
    instagram,
    email
  } = props;

  return (
    <div className="about-container">
      <div className='about-text'>
        {about}
      </div>
      <div className='email'>
        {email}
      </div>
      <a className="ig-link" target="_blank" rel="noreferrer" href={`https://instagram.com/${instagram}`}>
        @{instagram}
      </a>
    </div>
  );
}

About.propTypes = {
  about: PropTypes.string,
  instagram: PropTypes.string,
  email: PropTypes.string
}

export default About;