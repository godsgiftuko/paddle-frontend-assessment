import React from 'react';
import { Stack } from '@mui/material';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavIcon,
  Footer,
  FooterList,
  FooterListItem
} from '../NavbarElements';
import { footersData } from '../data';
import Logo from '../MainLayout/Logo';
import { Icon } from '../../Fonts';

const SocialLinks = () => (
    <>
     {
       footersData.map(({label, icon, href}) => (
          label === 'Contact Us' 
          ? <NavBtnLink key={label} to={href}>{label}</NavBtnLink>
          :
          <NavMenu padding key={label}>
            <NavLink to={href} activestyle="true">
              <NavIcon icon={icon} />
            </NavLink>
          </NavMenu>
      ))
     }
     
    </>
)

const Footer_ = () => {
  return (
    <Footer>
      <Nav>
        <SocialLinks />
      </Nav>
      <FooterList>
      	<FooterListItem to="/">Terms of services</FooterListItem>
      	<FooterListItem to="/">Privacy policy</FooterListItem>
      </FooterList>
        <span className="fadedWhite" style={{ fontSize: '14px', marginTop: 5, opacity: 0.5 }}>Copyright 2021 @Peddle Technologies. All Right Reserved.</span>
    </Footer>
  );
};

export default Footer_;