import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: #eee;
`;

const Menu = styled.nav`
  display: flex;
  position: relative;
  width: initial;
  border-bottom: none;
  margin: auto 0 auto auto;
  font-family: 'Open Sans';
  background: none;
  left: initial;
  top: initial;
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
`;

export function Header() {
  const { pathname } = useLocation();
  return (
    <HeaderWrapper>
      <Menu>
        <StyledLink isActive={pathname === '/'} to="/">
          Home
        </StyledLink>
        <StyledLink isActive={pathname === '/login'} to="/login">
          Login
        </StyledLink>
      </Menu>
    </HeaderWrapper>
  );
}
