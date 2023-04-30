// React
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom';

// Search
import Fuse from 'fuse.js';

// Components
import Card from './Card';

function Shop(props) {
  const { products, categories } = props;
  const { id, query } = useParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [rotations, setRotations] = useState([]);

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    // Use query or id
    if (id !== undefined && categories[id] !== undefined) {
      setFilteredProducts(categories[id]);
    } else if (query !== undefined) {
      // Initialize search
      const fuse = new Fuse(products, {
        keys: [
          { name: 'description', weight: .4 },
          { name: 'handle', weight: .4 },
          { name: 'productType', weight: 1 },
          { name: 'title', weight: 1 },
        ],
        includeScore: true
      });
      const results = fuse.search(query);
      const filteredResults = results.filter((result) => { return result.score < .5; });
      const filteredProducts = filteredResults.map((result) => { return result.item; })
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(products);
    }
    // set Rotations
    const randomRotations = products.map(() => {
      return getRandomArbitrary(-0.8, 0.8);
    });
    setRotations(randomRotations);
  }, [id, query, products, categories]);


  return (
    <div className="products-grid">
      {!(query === "" || query === undefined) && filteredProducts.length === 0 && <div>no results</div>}
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
                price={product.variants[0].price.amount}
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