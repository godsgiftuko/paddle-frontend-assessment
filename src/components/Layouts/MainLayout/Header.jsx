import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from '../NavbarElements';
import { headersData } from '../data';
import Logo from '../MainLayout/Logo';

const NavItems = () => (
    <NavBtn>
     {
       headersData.map(({label, href}) => (
          label === 'Contact Us' 
          ? <NavBtnLink key={label} to={href}>{label}</NavBtnLink>
          :
          <NavMenu key={label}>
            <NavLink to={href} activestyle="true">
              {label}
            </NavLink>
          </NavMenu>
      ))
     }
     
    </NavBtn>
)

const Header = () => {
  return (
    <header>
      <Nav>
        <NavLink to='/'>
          <Logo />
        </NavLink>
        <Bars />
        <NavItems />
      </Nav>
    </header>
  );
};

export default Header;