import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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

  useEffect(() => {
    // Fetch all products in your cart
    if (checkoutID && shopClient) {
      shopClient.checkout.fetch(checkoutID).then((_checkout) => {
        // setCartProducts(_checkout.lineItems);
        console.log(_checkout);
        setCartProducts([]);
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

  return (
    <>
      {/* Menu button (shell) */}
      <div className="cart-button" onClick={open ? onClose : onOpen}>
        {open ? 'close' : 'bag'}
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
          <div>bag</div>
        </div>
        <div>
          {cartProducts.map((lineItem, index) => {
            return (
              <div key={index}>
                <div>{lineItem.title}</div>
                <div>${lineItem.variant.price}</div>
                Buy now button
                <div
                  style={{ cursor: 'pointer', fontWeight: 'bold' }}
                  onClick={() => {
                    removeFromCart(lineItem.id);
                  }}
                >
                  Remove from cart
                </div>
                <img
                  alt={lineItem.title}
                  style={{ width: 300 }}
                  src={lineItem.variant.image.src}
                />
              </div>
            );
          })}
        </div>
        <a href={checkoutURL} target={'_blank'} rel="noreferrer" className={'checkoutButton'}>
          CHECKOUT
        </a>
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
