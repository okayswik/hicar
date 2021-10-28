import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
flex
list-none
`};
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
  text-xs
  md:text-base
  text-black
  font-medium
  mr-1
  md:mr-5
  cursor-pointer
  transition
  duration-300
  hover:text-gray-700
`};
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
  text-white
  text-xl
  mb-3
  focus:text-white


`};
    `};
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href="">New Car</a>
          </NavItem>
          <NavItem menu>
            <a href="">Car Reviews</a>
          </NavItem>
          <NavItem menu>
            <a href="">Compare Cars</a>
          </NavItem>
          <NavItem menu>
            <a href="">More</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <a href="">New Car</a>
      </NavItem>
      <NavItem>
        <a href="">Car Reviews</a>
      </NavItem>
      <NavItem>
        <a href="">Compare Cars</a>
      </NavItem>
      <NavItem>
        <a href="">More</a>
      </NavItem>
    </ListContainer>
  );
}
