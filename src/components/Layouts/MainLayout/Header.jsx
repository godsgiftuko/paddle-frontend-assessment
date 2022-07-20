import React from 'react';
import {
  Nav,
} from '../NavbarElements';
import Logo from '../MainLayout/Logo';
import { NavItems } from './Navbar';


const Header = () => {
  return (
    <header>
      <Nav>
        <Logo />
        <NavItems />
      </Nav>
    </header>
  );
};

export default Header;