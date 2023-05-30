import React from 'react';
import './header.css';
const HeaderRight = () => {
  return (
    <a className="header-right" href="/">
      ARACHNOMESH
    </a>
  );
};
const HeaderLeft = () => {
  const [currentTab, setCurrentTab] = React.useState('Home');
  const nav = ['Home', 'About', 'Bottles', 'Blog', 'Contact'];
  return (
    <div className="header-left">
      <ul className="header-left-nav">
        {nav.map((item, index) => (
          <>
            <li className="header-left-item" key={item}>
              <a
                className={`${currentTab === item && 'nav-selected'}`}
                href="/">
                {item}
              </a>
            </li>
          </>
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
