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
import Stocklists from './components/Stocklists';
import Template from './components/Template';
import Menu from './components/Menu';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import ScrollToTop from './components/ScrollToTop';

// Style
import './App.css';

export default function App() {

  // Site-Wide State
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({});
  const [shopClientTimestamp, setShopClientTimestamp] = useState(Date.now());
  const [shopClient, setShopClient] = useState(undefined);
  const [cartSize, setCartSize] = useState(undefined);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutID, setCheckoutID] = useState(
    localStorage.getItem('checkoutID'),
  );
  const [checkoutURL, setCheckoutURL] = useState(
    localStorage.getItem('checkoutURL'),
  );

  // Airtable vars
  const [globalCss, setGlobalCss] = useState("");
  const [faqs, setFaqs] = useState([]);
  const [about, setAbout] = useState("");
  const [instagram, setInstagram] = useState("@keith _lafuente");
  const [email, setEmail] = useState("keithlafuente@gmail.com");
  const [favicon, setFavicon] = useState("🐚");

  // SHOPIFY CONFIG
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
      // eslint-disable-next-line no-undef
      domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
      // eslint-disable-next-line no-undef
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
          createNewCart(shopClient);
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
      createNewCart(shopClient);
    }

    // AIRTABLE CONTENT
    var Airtable = require('airtable');
    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: 'keyCVfnd8GGLw029l', // a read-only key
    });
    var base = Airtable.base('appUHQ9x9G0OAVdwX');

    // CSS Variables
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
        console.log(cssVars);
        const cssString = cssVars.join("\n");
        setGlobalCss(cssString);
      });

    // FAQ
    base('Faq')
      .select({ view: 'Grid view' })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        const _faqs = [];
        records.forEach(function (record) {
          const question = record.get('Question');
          const answer = record.get('Answer');
          if (question && answer)
            _faqs.push({
              "question": question,
              "answer": answer
            });
        });
        setFaqs(_faqs);
      });

    // ABOUT
    base('About')
      .select({ view: 'Grid view' })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          const key = record.get("Key");
          const value = record.get("Value");
          if (key === "about") setAbout(value);
          else if (key === "instagram") setInstagram(value);
          else if (key === "email") setEmail(value);
          else if (key === "favicon") setFavicon(value);
        });
      });

  }, []);

  const updateShopClient = () => {
    setShopClientTimestamp(Date.now());
  };

  const createNewCart = (shopClient) => {
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

  // STYLE CONFIG
  const GlobalStyles = createGlobalStyle`
    body {
      ${props => (props.globalCss)}
    }
  `;

  // MARKUP 
  return (
    <>
      <Helmet>
        <title>Keith Lafuente</title>
        <link rel="icon" href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${favicon}</text></svg>`} sizes="16x16" />
      </Helmet>
      <GlobalStyles globalCss={globalCss} />
      <HashRouter basename='/'>
        <ScrollToTop>
          <div className="background" />
          <div className="page">
            <div className="pageContent">
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
                      openCart={() => setIsCartOpen(true)}
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
                  path="/search/:query"
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
                    <About
                      about={about}
                      instagram={instagram}
                      email={email}
                    />
                  }
                />
                <Route
                  path="faq"
                  element={
                    <Faq faqs={faqs} />
                  }
                />
                <Route
                  path="stocklists"
                  element={
                    <Stocklists />
                  }
                />
                <Route
                  path="template"
                  element={
                    <Template />
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
            </div>
            <Footer />
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
            <div />
          </Link>

          {/* SEARCH */}
          <SearchBar />

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
        </ScrollToTop>
      </HashRouter>
    </>
  );
}
