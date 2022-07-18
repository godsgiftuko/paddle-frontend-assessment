import { Icon } from '@iconify/react';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled, { css } from 'styled-components';


export const Button = styled.button`
  border-radius: 51px;
  background: ${prop => prop.background || 'var(--purple)'};
  padding: ${prop => prop.padding || '10px 50px'};
  color: var(--white);
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: calc(var(--semibold) + 100);
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
