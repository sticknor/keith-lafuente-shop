// React
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Menu(props) {
  const { onClose, onOpen, open, categories } = props;

  return (
    <>
      {/* Menu button (shell) */}
      <div className="menu-button" onClick={open ? onClose : onOpen}>
        <div className="menu-button-text">Menu</div>
      </div>

      {/* Menu content */}
      <div className={`menu ${open ? 'menu-open' : 'menu-closed'}`}>
        <div className="menu-content">
          {Object.keys(categories || {}).map((category, index) => {
            return (
              <div className="menu-link" key={index}>
                <Link to={`/collection/${category}`}>{category}</Link>
              </div>
            );
          })}
          <div className="menu-divider" />
          <Link to="/about" className="menu-link">about</Link>
          <Link to="/faq" className="menu-link">faq</Link>
          <Link to="/stockists" className="menu-link">stockists</Link>
          <Link to="/filipino-fashion-history" className="menu-link">filipino fashion history</Link>
        </div>
      </div>
      {/* Menu cancel area */}
      {open && <div className={'menuCancelArea'} onClick={onClose} />}
    </>
  );
}

Menu.propTypes = {
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
  shopClient: PropTypes.object,
  categories: PropTypes.object,
}

export default Menu;
