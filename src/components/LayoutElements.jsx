import { Icon } from '@iconify/react';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
// import { Button as Button_ } from '@mui/material';
import styled, { css } from 'styled-components';
import { typography, colorPalette } from '../theme';

const { size, weight } = typography;

// transaparent: 'transaparent',
//     blue: '#271AC1',
//     lightBlue: '#213F72',
//     darkBlue: '#19073B',
//     darkBlue1: '#1C0C28',
//     pink: '#FF00F7 !important',
//     white: '#FFFFFF',
//     white1: '#F6F7F9',
//     black: '#000000',
//     purple: '#7F1E7B',
//     brown: '#7F4129',
//     gray: '#707070',
//     gray1: '#09090991',
//     grey: '#00000012',
//     primaryGradient: 'linear-gradient(40deg, #271AC1 30% #1C0C28 90%)'

export const Button = styled.button`
  border-radius: 51px;
  background: var(--purple);
  padding: 10px 50px;
  color: var(--white);
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

`;

export const RoundedInputField = styled.input.attrs({ 
  type: 'text',
})`
  border-radius: 51px;
  padding: 10px 22px;
  fontSize: 30px;
  color: #000000;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;
