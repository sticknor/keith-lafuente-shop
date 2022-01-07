// React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

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

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  return (
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
        );
      })}
    </div>
  );
}

Shop.propTypes = {
  products: PropTypes.array,
  categories: PropTypes.object
};

export default Shop;