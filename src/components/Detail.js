// React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';

// Gesture
import { useSwipeable } from 'react-swipeable';

// Components
import Card from './Card';
// Assets
// import CardDefault from './../assets/shop_card_default.png';

function Detail(props) {
  const { id } = useParams();

  const {
    products,
    shopClient,
    checkoutID,
    updateShopClient,
    openCart,
  } = props;

  const [imageIndex, setImageIndex] = useState(0);
  const [product, setProduct] = useState(null);
  const [variantIndex, setVariantIndex] = useState(0);
  const [addToBagEnabled, setAddToBagEnabled] = useState(true);
  const [addToBagAnimating, setAddToBagAnimating] = useState(false);

  useEffect(() => {
    for (var _product of products) {
      if (_product.handle === id) setProduct(_product);
    }
  }, [id, products]);

  useEffect(() => {
    if (product != null && product.variants.length > variantIndex) {
      if (product.variants[variantIndex].available === false) {
        setAddToBagEnabled(false);
      } else {
        setAddToBagEnabled(true);
      }
    }
  }, [product, variantIndex]);

  useEffect(() => {
    if (product != null && product.images !== undefined) {
      product.images.forEach((_image) => {
        const img = new Image();
        img.src = _image.src;
      });
    }
  }, [product, imageIndex]);

  const addToCartWithAnimation = (productID) => {
    setAddToBagAnimating(true);
    addToCart(productID)
    setTimeout(() => {
      setAddToBagAnimating(false);
      openCart();
    }, 1000);
  }

  const addToCart = (productID) => {
    const lineItemsToAdd = [
      {
        variantId: productID,
        quantity: 1,
      },
    ];

    if (shopClient) {
      shopClient.checkout.addLineItems(checkoutID, lineItemsToAdd).then(() => {
        updateShopClient();
      });
    }
  };

  const handleChangeVariant = (event) => {
    setVariantIndex(event.target.value);
  }

  const handlePrevClick = () => {
    if (product.images.length === 1) return;
    setImageIndex(((imageIndex + product.images.length) - 1) % product.images.length);
  };

  const handleNextClick = () => {
    if (product.images.length === 1) return;
    setImageIndex((imageIndex + 1) % product.images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
    config: {
      delta: 2,                            // min distance(px) before a swipe starts. *See Notes*
      preventDefaultTouchmoveEvent: true,  // call e.preventDefault *See Details*
      trackTouch: true,                     // track touch input
      trackMouse: false,                    // track mouse input
    }
  });

  if (product == null) return <div>loading...</div>;

  // Create our number formatter.
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


  var price = product.variants[variantIndex].price.amount;
  var formattedPrice = formatter.format(price);

  return (
    <div className="detailContainer">
      <div className="detailLeftCol" >
        <div className="detail-card" {...handlers} onClick={handleNextClick}>
          <Card
            title={product.title}
            image={product.images[imageIndex]}
            price={price}
            sold={!product.variants[variantIndex].available}
          />
          <div className="carousel-dots">
            {product.images.length > 1 &&
              product.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="carousel-dot-touch-target"
                    onClick={() => { setImageIndex(index); }}
                  >
                    <div
                      key="index"
                      className={`${index === imageIndex ? "selected-carousel-dot" : "carousel-dot"}`}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="detail-right-col-mobile">
          <div className="menu-divider" />
          <div className="detail-section" style={{ fontWeight: 600 }}>
            {product.title}
          </div>
          <div className="detail-section">{product.description}</div>
          {product.variants.length <= 1 &&
            <div className="detail-section">{formattedPrice}</div>
          }
          {product.variants.length > 1 &&
            <div className="detail-variants">
              <select value={variantIndex} onChange={handleChangeVariant}>
                {product.variants.map((variant, index) => {
                  if (variant.available) {
                    return <option value={index} key={index}>{variant.title} - {formatter.format(product.variants[index].price.amount)}</option>
                  } else {
                    return <option disabled value={index} key={index}>{variant.title} (sold out)</option>
                  }
                })}
              </select>
            </div>
          }
          {addToBagAnimating ?
            <div className={"add-to-bag-button-disabled detail-section"}>adding</div>
            : (
              <div
                className={addToBagEnabled ? "add-to-bag-button detail-section" : "add-to-bag-button-disabled detail-section"}
                onClick={() => {
                  addToCartWithAnimation(product.variants[variantIndex].id);
                }}
              >
                {' '}
                {addToBagEnabled ? "Add to bag" : "Sold Out"}
              </div>
            )
          }

        </div>
      </div>

      <div className="detail-right-col">
        <div className="menu-divider" />
        <div className="detail-section" style={{ fontWeight: 600 }}>
          {product.title}
        </div>
        <div className="detail-section">{product.description}</div>
        {product.variants.length <= 1 &&
          <div className="detail-section">{formattedPrice}</div>
        }
        {product.variants.length > 1 &&
          <div className="detail-variants">
            <select value={variantIndex} onChange={handleChangeVariant}>
              {product.variants.map((variant, index) => {
                if (variant.available) {
                  return <option value={index} key={index}>{variant.title} - {formatter.format(product.variants[index].price.amount)}</option>
                } else {
                  return <option disabled value={index} key={index}>{variant.title} (sold out)</option>
                }
              })}
            </select>
          </div>
        }
        {addToBagAnimating ?
          <div className={"add-to-bag-button-disabled detail-section"}>adding</div>
          : (
            <div
              className={addToBagEnabled ? "add-to-bag-button detail-section" : "add-to-bag-button-disabled detail-section"}
              onClick={() => {
                addToCartWithAnimation(product.variants[variantIndex].id);
              }}
            >
              {' '}
              {addToBagEnabled ? "Add to bag" : "Sold Out"}
            </div>
          )
        }

      </div>
    </div>
  );
}

Detail.propTypes = {
  products: PropTypes.array,
  shopClient: PropTypes.object,
  checkoutID: PropTypes.string,
  updateShopClient: PropTypes.func,
  openCart: PropTypes.func
}

export default Detail;