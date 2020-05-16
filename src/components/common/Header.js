import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const HeaderWrapper = styled.div`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #f8049c, #fdd54f);
  border-bottom: 3px solid #fdd54f;
`;

const Menu = styled.nav`
  display: ${(props) => (props.isMenuOpen ? 'block' : 'none')};
  font-family: 'Open Sans';
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  border-bottom: 3px solid #fdd54f;
  background: white;

  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    border-bottom: none;
    position: relative;
    width: initial;
  }
`;

// Here we import Link from RR as RouterLInk
// We need to destructure the isActive Prop in order to pass it down to the StyledLink component correctly
const Link = ({ isActive, children, ...props }) => {
  return <RouterLink {...props}>{children}</RouterLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  color: black;
`;

const HamburgerIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export function Header() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <HeaderWrapper>
      <HamburgerIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div />
        <div />
        <div />
      </HamburgerIcon>
      <Menu isMenuOpen={isMenuOpen}>
        <StyledLink to="/" isActive={pathname === '/'}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === '/login'}>
          Login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
}
