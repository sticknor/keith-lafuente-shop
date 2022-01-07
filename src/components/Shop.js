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
  const [rotations, setRotations] = useState([]);

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    if (id !== undefined && categories[id] !== undefined) {
      setFilteredProducts(categories[id]);
    } else {
      setFilteredProducts(products);
    }
    // set Rotations
    const randomRotations = products.map(() => {
      return getRandomArbitrary(-0.8, 0.8);
    });
    setRotations(randomRotations);

  }, [id, products, categories]);


  return (
    <div className="products-grid">
      {filteredProducts.map((product, index) => {
        return (
          <Link key={index} to={`/product/${product.handle}`}>
            <div
              className={`product-card`}
              style={{
                transform: `rotate(${rotations[index]}deg)`,
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