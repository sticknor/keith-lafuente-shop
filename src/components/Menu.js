// React
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shell from './../assets/shell.png';

function Menu(props) {
  const { onClose, onOpen, open, categories } = props;

  return (
    <>
      {/* Menu button (shell) */}
      <div className="menu-button" onClick={open ? onClose : onOpen}>
        <img src={Shell} alt="Menu" />
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
          <div className="menu-link">archive</div>
          <div className="menu-link">runway</div>
          <div className="menu-divider" />
          <div className="menu-link">about</div>
          <div className="menu-link">contact</div>
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
