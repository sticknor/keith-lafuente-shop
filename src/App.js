// React
import React, { useState, useEffect } from 'react';
import { Routes, HashRouter, Route, Link } from 'react-router-dom';

// Style
import { createGlobalStyle } from 'styled-components'

// Shopify
import Client from 'shopify-buy';

// Helmet 
import Helmet from 'react-helmet'

// Screens
import Shop from './components/Shop';
import Cart from './components/Cart';
import Detail from './components/Detail';
import About from './components/About';
import Faq from './components/Faq';
import Menu from './components/Menu';

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

  const [globalCss, setGlobalCss] = useState("");

  useEffect(() => {
    // Fetch all products in your shop
    if (shopClient) {
      shopClient.product.fetchAll().then((_products) => {
        // Products are fetched oldest to newest,
        // So, we reverse this list
        _products = _products.reverse();
        const _categories = {};
        for (var product of _products) {
          // sort products into their categories
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

    // check for saved cart
    if (checkoutID && checkoutURL) {
      // check if cart is still valid
      shopClient.checkout.fetch(checkoutID).then((checkout) => {
        if (checkout === null) {
          // cart is invalid
          createNewCart();
        } else {
          // cart is valid, get size
          var _cartSize = 0;
          checkout.lineItems.map((lineItem) => {
            _cartSize += lineItem.quantity;
            return lineItem;
          });
          setCartSize(_cartSize);
        }
      });
    } else {
      // no saved cart
      createNewCart();
    }

    // Get airtable variables
    var Airtable = require('airtable');
    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: 'keyCVfnd8GGLw029l', // a read-only key
    });
    var base = Airtable.base('appUHQ9x9G0OAVdwX');

    // GET CSS Variables from Airtable
    base('Design')
      .select({ view: 'Grid view' })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        const cssVars = [];
        records.forEach(function (record) {
          const key = record.get('Key');
          const color = record.get('Value (Color)');
          const image = record.get('Value (Image)');
          if (key && color) cssVars.push(`${key + "-color"}: ${color};`);
          if (key && image && image.length > 0) cssVars.push(`${key + "-image"}: url(${image[0].url});`);
        });
        const cssString = cssVars.join("\n");
        setGlobalCss(cssString);
      });

    // GET FAQ Content From Airtable
    base('Faq')
      .select({ view: 'Grid view' })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(records);
      });

    // GET ABOUT Content From Airtable
    base('About')
      .select({ view: 'Grid view' })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(records);
      });

  }, []);

  const updateShopClient = () => {
    setShopClientTimestamp(Date.now());
  };

  const GlobalStyles = createGlobalStyle`
    body {
      ${props => (props.globalCss)}
    }
  `;

  const createNewCart = () => {
    shopClient.checkout.create().then((checkout) => {
      setCheckoutID(checkout.id);
      setCheckoutURL(checkout.webUrl);
      setCartSize(0);
      updateShopClient();
      // Persist the cart
      localStorage.setItem('checkoutID', checkout.id);
      localStorage.setItem('checkoutURL', checkout.webUrl);
    });
  }

  return (
    <>
      <Helmet>
        <title>Keith Lafuente</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐚</text></svg>" sizes="16x16" />
      </Helmet>
      <GlobalStyles globalCss={globalCss} />
      <HashRouter basename='/'>
        <div>
          <div className="background" />
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
                path="about"
                element={
                  <About />
                }
              />
              <Route
                path="faq"
                element={
                  <Faq />
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
              <div>
                <Link to="/about" className='footer-link'>
                  about
                </Link>
              </div>
              <div>
                <Link to="/faq" className='footer-link'>
                  faq
                </Link>
              </div>
              <div>
                <a href="https://wayawaya.co/" target="_blank" rel="noreferrer" className='footer-link'>
                  stockists
                </a>
              </div>
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
          />
        </div >
      </HashRouter>
    </>
  );
}