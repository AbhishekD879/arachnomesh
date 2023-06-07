import React from 'react';
import './header.css';
import {Link} from "wouter"
const HeaderRight = () => {
  return (
    <Link className="header-right" href="/">
      ARACHNOMESH
    </Link>
  );
};

const HeaderLeft = () => {
  const [currentTab, setCurrentTab] = React.useState('Home');
  const nav = ['Home', 'About', 'Bottles', 'Blog', 'product'];

  return (
    <div className="header-left">
      <ul className="header-left-nav">
        {nav.map((item, index) => (
          <li className="header-left-item" key={item}>
            <Link
              className={`${currentTab === item && 'nav-selected'}`}
              href="/"
              to={`/${item}`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <button className="btn login">Login</button>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <HeaderRight />
      <HeaderLeft />
    </div>
  );
};

export default Header;
