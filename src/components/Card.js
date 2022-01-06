// React
import React from 'react';
import PropTypes from 'prop-types'

// Assets
import CardDefault from './../assets/shop_card_default.png';

function Card(props) {
  const { title, image, price, sold } = props;

  // const [imageIndex, setImageIndex] = useState(0);
  // const [prevEnabled, setPrevEnabled] = useState(false);
  // const [nextEnabled, setNextEnabled] = useState(false);

  // const handlePrevClick = () => {
  //   setImageIndex(imageIndex - 1);
  // };

  // const handleNextClick = () => {
  //   console.log('handle nxt lci');
  //   setImageIndex(imageIndex + 1);
  // };

  // useEffect(() => {
  //   if (useImageCarousel) {
  //     setPrevEnabled(imageIndex - 1 >= 0);
  //     setNextEnabled(imageIndex + 1 < images.length);
  //   }
  // }, [imageIndex, useImageCarousel]);

  {
    /* 
          {prevEnabled && (
            <div className={'prev-button'} onClick={handlePrevClick}></div>
          )}
          {nextEnabled && (
            <div className={'next-button'} onClick={handleNextClick}></div>
          )} */
  }

  return (
    <div className={'card-container'}>
      <img
        className={'card-image-underlay'}
        alt={title}
        style={{ width: '81%', left: '7%' }}
        src={image.src}
      />
      <img className={'card-graphic-overlay'} src={CardDefault} />
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
  sold: PropTypes.bool
}

export default Card;