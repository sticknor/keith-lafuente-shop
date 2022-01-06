// React
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Shopify
import Client from 'shopify-buy';

// Screens
import Shop from './components/Shop';
import Cart from './components/Cart';
import Detail from './components/Detail';
import Menu from './components/Menu';

// Assets
import Background from './assets/background_default.png';
// import Shell from './assets/shell.png';
import Logo from './assets/keith_logo.svg';
// import CartIcon from './assets/shopping_bag_icon.svg';

// Style
import './App.css';

export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({});

  // Site-Wide State
  const [shopClientTimestamp, setShopClientTimestamp] = useState(Date.now());
  const [shopClient, setShopClient] = useState(undefined);
  const [checkoutID, setCheckoutID] = useState(
    localStorage.getItem('checkoutID'),
  );
  const [checkoutURL, setCheckoutURL] = useState(
    localStorage.getItem('checkoutURL'),
  );
  const [cartSize, setCartSize] = useState(undefined);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [menuColor, setMenuColor] = useState('#ffffff');
  const [cartColor, setCartColor] = useState('#ffffff');
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Fetch all products in your shop
    if (shopClient) {
      shopClient.product.fetchAll().then((_products) => {
        //console.log(_products);
        const _categories = {};
        for (var product of _products) {
          // console.log(product.productType)
          // console.log(_categories[product.productType])
          if (_categories[product.productType] !== undefined) {
            _categories[product.productType] = [
              ..._categories[product.productType],
              product,
            ];
          } else {
            _categories[product.productType] = [product];
          }
        }
        setCategories(_categories);
        setProducts(_products);
      });
    }
  }, [shopClient]);

  useEffect(() => {
    const shopClient = Client.buildClient({
      domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
      storefrontAccessToken: process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN,
    });
    setShopClient(shopClient);
    setShopClientTimestamp(Date.now());

    if (!checkoutID || !checkoutURL) {
      shopClient.checkout.create().then((checkout) => {
        setCheckoutID(checkout.id);
        setCheckoutURL(checkout.webUrl);
        updateShopClient();
        // Persist the cart
        localStorage.setItem('checkoutID', checkout.id);
        localStorage.setItem('checkoutURL', checkout.webUrl);
      });
    }

    // Get size of cart
    if (checkoutID && shopClient) {
      shopClient.checkout.fetch(checkoutID).then((_checkout) => {
        if (_checkout === null) return;
        var _cartSize = 0;
        _checkout.lineItems.map((lineItem) => {
          _cartSize += lineItem.quantity;
          return lineItem;
        });
        setCartSize(_cartSize);
      });
    }

    // Get airtable variables
    var Airtable = require('airtable');
    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: 'keyCVfnd8GGLw029l', // a read-only key
    });
    var base = Airtable.base('appUHQ9x9G0OAVdwX');
    base('Variables')
      .select({
        view: 'Grid view',
      })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          let backgroundImages = record.get('Background Image');
          let menuColor = record.get('Menu Color');
          let cartColor = record.get('Cart Color');
          if (menuColor) setMenuColor(menuColor);
          if (cartColor) setCartColor(cartColor);
          if (backgroundImages.length > 0)
            setBackgroundImage(backgroundImages[0].url);
        });
      });
  }, []);

  const updateShopClient = () => {
    setShopClientTimestamp(Date.now());
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div
          style={{ backgroundImage: `url(${Background}` }}
          className="background"
        />
        {/* <nav>
          

          
        </nav> */}
        <div className="page">
          <Routes>
            <Route
              path="/product/:id"
              element={
                <Detail
                  key={shopClientTimestamp}
                  shopClient={shopClient}
                  checkoutID={checkoutID}
                  updateShopClient={updateShopClient}
                  products={products}
                  backgroundImage={backgroundImage}
                />
              }
            />
            <Route
              path="/collection/:id"
              element={
                <Shop
                  key={shopClientTimestamp}
                  shopClient={shopClient}
                  checkoutID={checkoutID}
                  updateShopClient={updateShopClient}
                  products={products}
                  categories={categories}
                />
              }
            />
            <Route
              path="/"
              element={
                <Shop
                  key={shopClientTimestamp}
                  shopClient={shopClient}
                  checkoutID={checkoutID}
                  updateShopClient={updateShopClient}
                  products={products}
                />
              }
            />
          </Routes>
          <footer>
            <div>keith lafuente 2021</div>
            <div>shipping</div>
            <div>contact</div>
            <div>faq</div>
          </footer>
        </div>

        {/* MENU */}
        <Menu
          open={isMenuOpen}
          onOpen={() => {
            setIsMenuOpen(true);
          }}
          onClose={() => {
            setIsMenuOpen(false);
          }}
          color={menuColor}
          shopClient={shopClient}
          categories={categories}
        />

        {/* LOGO */}
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </Link>

        {/* CART */}
        <Cart
          key={shopClientTimestamp}
          shopClient={shopClient}
          checkoutID={checkoutID}
          checkoutURL={checkoutURL}
          updateShopClient={updateShopClient}
          cartSize={cartSize}
          onClose={() => setIsCartOpen(false)}
          onOpen={() => {
            setIsCartOpen(true);
          }}
          open={isCartOpen}
          color={cartColor}
        />
      </div>
    </Router>
  );
}