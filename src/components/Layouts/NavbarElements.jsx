import { Icon } from '@iconify/react';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { typography, colorPalette } from '../../theme';

const { size, weight } = typography;

export const Nav = styled.nav`
  background: #000;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1689px) / 2);
  z-index: 10;

  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: '0 40px';
  height: 100%;
  cursor: pointer;

  &.active {
    color: #FF00F7;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavIcon = styled(Icon)`
  display: block;
  color: #fff;
  font-size: 22px;
  opacity: 70%;
    &:hover {
      opacity: 100%;
    }

    @media screen and (max-width: 768px) {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
    }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: {$prop => prop.show && prop.show || none};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 51px;
  background: #271AC1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #1C0C28;
  padding: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  text-decoration: none;
  column-gap: 75px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const FooterListItem = styled(Link)`
  display: flex;
  font-size: size.small18;
  color: #ffff;
  // margin: 0 20px;
  opacity: 70%;
  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 100%;
  }
`;