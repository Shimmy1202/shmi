import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
  margin: 80px 40px 40px;
  padding: 50px 40px 40px;
  width: 240px;
  min-width: 240px;
  background-color: #f5f6fa;
  border-radius: 5px;
  box-shadow: 2px 2px 3px #e9eaee, -2px -2px 2px #fff;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    box-shadow: none;
    margin: 0;
    padding: 0;
  }
`;

const LogoWrapper = styled.h1`
  margin-bottom: 40px;
  @media only screen and (max-width: 1024px) {
    margin: 10px 0 20px;
  }
`;

const Logo = styled.img`
  margin: 0 auto;
`;

const Border = styled.div`
  content: "";
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 200px;
  height: 6px;
  border-radius: 3px;
  box-shadow: 2px 2px 2px #e9eaee inset, -2px -2px 2px #fff inset;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const MenuList = styled.ul`
  padding: 0;
  margin: 80px 0 0;
  list-style: none;
  @media only screen and (max-width: 1024px) {
    margin: 0 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const MenuListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  & > a {
    color: #42475a;
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
  }
  @media only screen and (max-width: 1024px) {
    width: 29%;
  }
`;

const MenuListLink = styled(NavLink)`
  height: 40px;
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  background-color: #f5f6fa;
  box-shadow: 3px 3px 4px #e4e5e9, -3px -3px 4px #ffffff,
    2px 2px 2px inset transparent, -2px -2px 2px inset transparent;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #949494;
    box-shadow: 3px 3px 4px transparent, -3px -3px 4px transparent,
      2px 2px 2px #dddde1 inset, -2px -2px 2px #ffffff inset;
  }
  &.active {
    color: #949494;
    box-shadow: inset 2px 2px 2px #dddde1, inset -2px -2px 2px #ffffff;
  }
  @media only screen and (max-width: 1024px) {
    justify-content: center;
  }
  @media only screen and (max-width: 599px) {
    justify-content: center;
    > p {
      font-size: 12px;
    }
  } ;
`;

const MenuIcon = styled.img`
  display: inline-flex;
  width: 20px;
  margin-right: 16px;
  @media only screen and (max-width: 1024px) {
    margin: 0 8px 0 -4px;
  }
  @media only screen and (max-width: 599px) {
    width: 16px;
    margin: 0 8px 0 -4px;
  }
`;

const MenuListButton = ({ label, to }) => {
  return (
    <MenuListLink exact to={to} activeClassName="active">
      <MenuIcon src={`${process.env.PUBLIC_URL}/images/${label}Icon.svg`} />
      <p>{label}</p>
    </MenuListLink>
  );
};

export const Menu = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo src={`${process.env.PUBLIC_URL}/images/menu-Logo.svg`} />
      </LogoWrapper>
      <Border />
      <MenuList>
        <MenuListItem>
          <MenuListButton to="/" label="Profile" />
        </MenuListItem>
        <MenuListItem>
          <MenuListButton to="/works" label="Works" />
        </MenuListItem>
        <MenuListItem>
          <MenuListButton to="/contact" label="Contact" />
        </MenuListItem>
      </MenuList>
    </Container>
  );
};
