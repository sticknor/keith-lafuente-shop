// React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import Helmet from 'react-helmet'

import { useParams } from 'react-router-dom';

// Components
import Card from './Card';

function Shop(props) {
  const { products, categories } = props;
  const { id } = useParams();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (id !== undefined && categories[id] !== undefined) {
      setFilteredProducts(categories[id]);
    } else {
      setFilteredProducts(products);
    }
  }, [id, products, categories]);

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // Fetch all products in your shop
  //   shopClient?.product.fetchAll().then((_products) => {
  //     console.log(_products);
  //     setProducts(_products);
  //   });
  // }, []);

  // const addToCart = (productID) => {
  //   const lineItemsToAdd = [{
  //     variantId: productID,
  //     quantity: 1
  //   }];

  //   shopClient?.checkout.addLineItems(checkoutID, lineItemsToAdd).then(() => {
  //     updateShopClient();
  //   })
  // }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  return (
    <>
      <Helmet>
        <title>Shop - Keith LaFuente</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐚</text></svg>" sizes="16x16" />
      </Helmet>

      <div className="products-grid">
        {filteredProducts.map((product, index) => {
          return (
            <Link key={index} to={`/product/${product.handle}`}>
              <div
                className={`product-card`}
                style={{
                  transform: `rotate(${getRandomArbitrary(-0.8, 0.8)}deg)`,
                }}
              >
                <Card
                  key={index}
                  title={product.title}
                  image={product.images[0]}
                  price={product.variants[0].price}
                  sold={!product.variants[0].available}
                />
              </div>
            </Link>
            // { /* Buy now button */ }
            // {/* <div
            //   style={{ cursor: 'pointer', fontWeight: 'bold' }}
            //   onClick={() => { addToCart(product.variants[0].id)}}
            // >
            //   ADD TO CART
            // </div> */}
          );
        })}
      </div>
    </>
  );
}

Shop.propTypes = {
  products: PropTypes.array,
  categories: PropTypes.object
};

export default Shop;