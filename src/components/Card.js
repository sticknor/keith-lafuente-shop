// React
import React from 'react';
import PropTypes from 'prop-types'

function Card(props) {
  const { title, image, price, sold } = props;

  return (
    <div className={'card-container'}>
      <img
        className={'card-image-underlay'}
        alt={title || ""}
        style={{ width: '82%', left: '7%' }}
        src={image.src}
      />
      <div alt={title || ""} className={'card-graphic-overlay'} />
      <div className={'card-text-overlay'}>
        <div className={'card-title'}>{title}</div>
        {sold ? (
          <div className={'card-price card-sold-out'}>{'Sold\nout'}</div>
        ) : (
          <div className={'card-price'}>{`$${price.split('.')[0]}`}</div>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  price: PropTypes.string,
  sold: PropTypes.bool,
  design: PropTypes.string
}

export default Card;