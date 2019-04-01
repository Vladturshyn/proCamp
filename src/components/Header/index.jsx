import React from 'react';
import logo from '../../assets/img/logo.png';
import './header.scss';

const Header = () => (
  <header>
    <div className="header-line">
      <img src={logo} alt="Logo" />
    </div>
    <div className="header-bootom-line search" />
  </header>
);

export default Header;