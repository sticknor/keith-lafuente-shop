// React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
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
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);
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

      setPrevEnabled(imageIndex - 1 >= 0);
      setNextEnabled(imageIndex + 1 < product.images.length);
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
    setImageIndex(imageIndex - 1);
    setPrevEnabled(imageIndex - 1 >= 0);
    setNextEnabled(imageIndex + 1 < product.images.length);
  };

  const handleNextClick = () => {
    setImageIndex(imageIndex + 1);
    setPrevEnabled(imageIndex - 1 >= 0);
    setNextEnabled(imageIndex + 1 < product.images.length);
  };

  if (product == null) return <div>loading...</div>;
  return (
    <>
      <div className="detailLeftCol" >
        <div className="detail-card">
          <Card
            title={product.title}
            image={product.images[imageIndex]}
            price={product.variants[variantIndex].price}
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
        {prevEnabled && (
          <div className={'prev-button'} onClick={handlePrevClick}></div>
        )}
        {nextEnabled && (
          <div className={'next-button'} onClick={handleNextClick}></div>
        )}
        <div className="detail-right-col-mobile">
          <div className="menu-divider" />
          <div className="detail-section" style={{ fontWeight: 600 }}>
            {product.title}
          </div>
          <div className="detail-section">{product.description}</div>
          {product.variants.length <= 1 &&
            <div className="detail-section">${product.variants[variantIndex].price}</div>
          }
          {product.variants.length > 1 &&
            <div className="detail-variants">
              <select value={variantIndex} onChange={handleChangeVariant}>
                {product.variants.map((variant, index) => {
                  if (variant.available) {
                    return <option value={index} key={index}>{variant.title} - ${variant.price}</option>
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
          <div className="detail-section">${product.variants[variantIndex].price}</div>
        }
        {product.variants.length > 1 &&
          <div className="detail-variants">
            <select value={variantIndex} onChange={handleChangeVariant}>
              {product.variants.map((variant, index) => {
                if (variant.available) {
                  return <option value={index} key={index}>{variant.title} - ${variant.price}</option>
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
    </>
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