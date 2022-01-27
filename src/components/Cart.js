import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Images
import BagIcon from './../assets/bag_icon.svg';

function Cart(props) {
  const {
    shopClient,
    checkoutID,
    checkoutURL,
    updateShopClient,
    onClose,
    open,
    onOpen,
  } = props;

  const [cartProducts, setCartProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(undefined);

  // Create our number formatter.
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    // Fetch all products in your cart
    if (checkoutID && shopClient) {
      shopClient.checkout.fetch(checkoutID).then((_checkout) => {
        setCartProducts(_checkout.lineItems);
        setSubtotal(_checkout.lineItemsSubtotalPrice.amount);
      });
    }
  }, []);

  const removeFromCart = (lineItemID) => {
    const lineItemIdsToRemove = [lineItemID];
    if (shopClient) {
      shopClient.checkout
        .removeLineItems(checkoutID, lineItemIdsToRemove)
        .then(() => {
          updateShopClient();
        });
    }
  };

  const sum = (previousValue, currentValue) => previousValue + currentValue;
  const cartSize = cartProducts.map((product) => { return product.quantity }).reduce(sum, 0);
  const bagIcon = (
    <div className="bag-icon">
      <img src={BagIcon} alt="" />
      <div className="cart-size">{cartSize}</div>
    </div>
  );

  return (
    <>
      {/* Menu button (shell) */}
      <div className="cart-button" onClick={open ? onClose : onOpen}>
        <>
          {open && 'close'}
          {!open && bagIcon}
        </>
      </div>

      {open && <div className={'cartCancelArea'} onClick={onClose} />}

      <div className={`cart ${open ? 'cart-open' : 'cart-closed'}`}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {bagIcon}
        </div>
        <div className="cart-products-container">
          {cartProducts.map((lineItem, index) => {
            return (
              <div key={index} className="cart-product">
                <div className="cart-product-info">
                  <img
                    alt={lineItem.title}
                    src={lineItem.variant.image.src}
                    className="cart-product-image"
                  />
                  <div>
                    <div className="cart-product-title">
                      {lineItem.title}
                      {(lineItem.variant && lineItem.variant.title !== 'Default Title') ? ` (${lineItem.variant.title})` : ''}
                    </div>
                    <div
                      className="cart-product-remove"
                      style={{ cursor: 'pointer', fontWeight: 'bold' }}
                      onClick={() => {
                        removeFromCart(lineItem.id);
                      }}
                    >
                      remove
                    </div>
                  </div>
                </div>
                <div className="cart-product-quantity">{lineItem.quantity}</div>
                <div>{formatter.format(lineItem.variant.price)}</div>
              </div>
            );
          })}
        </div>
        {cartProducts.length > 0 ? (
          <>
            <div className="subtotal">
              subtotal
              <div>{formatter.format(subtotal)}</div>
            </div>
            <a href={checkoutURL} target={'_blank'} rel="noreferrer" className={'checkoutButton'}>
              CHECKOUT
            </a>
            <div className="checkout-note">
              {`shipping & taxes calculated at checkout`}
            </div>
          </>) : (
          <>
            <div className="subtotal">
              empty
            </div>
          </>
        )
        }
      </div>
    </>
  );
}

Cart.propTypes = {
  shopClient: PropTypes.object,
  checkoutID: PropTypes.string,
  checkoutURL: PropTypes.string,
  updateShopClient: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  onOpen: PropTypes.func,
};

export default Cart;
