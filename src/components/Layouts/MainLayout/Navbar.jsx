import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { headersData } from '../data';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from '../NavbarElements';
import styled from 'styled-components';




export const NavItems = () => {
    const [click, setClick] = useState(false);

    const NavToggle = styled(!click ? FaBars : FaTimes)`
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

  const onToggle = () => {
    setClick(!click);
  }

  return (
    <>
      <NavBtn click={click}>
       {
         headersData.map(({label, href}) => (
            <NavMenu key={label}>
              <NavLink hasbackground={label === 'Contact Us' && 'blue' || null} to={href} activestyle="true">
                {label}
              </NavLink>
            </NavMenu>
        ))
       }
      </NavBtn>
      <NavToggle onClick={onToggle} />
    </>
  );
}
