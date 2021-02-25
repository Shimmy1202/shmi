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
`;

const LogoWrapper = styled.h1`
  margin-bottom: 40px;
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
`;

const MenuUl = styled.ul`
  padding: 0;
  margin: 80px 0 0;
`;

const MenuLi = styled.li`
  height: 40px;
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  background-color: #f5f6fa;
  color: #42475a;
  box-shadow: 3px 3px 4px #e4e5e9, -3px -3px 4px #ffffff,
    2px 2px 2px inset transparent, -2px -2px 2px inset transparent;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #949494;
    box-shadow: 3px 3px 4px transparent, -3px -3px 4px transparent,
      2px 2px 2px #dddde1 inset, -2px -2px 2px #ffffff inset;
  }
  &:active {
    color: #949494;
    box-shadow: inset 2px 2px 2px #dddde1, inset -2px -2px 2px #ffffff;
  }
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  > img,
  p {
    fill: #42475a;
    transition: all 0.3s ease-in-out;
  }
`;

const MenuIcon = styled.img`
  display: inline-flex;
  min-width: 20px;
  margin-right: 16px;
`;

export const Menu = ({ tab, setTab }) => {
  return (
    <Container>
      <LogoWrapper>
        <Logo src={`${process.env.PUBLIC_URL}/images/menu-Logo.svg`} />
      </LogoWrapper>
      <Border />
      <MenuUl>
        <MenuLi focused={tab === "profile"} onClick={() => setTab("profile")}>
          <MenuIcon src={`${process.env.PUBLIC_URL}/images/prfIcon.svg`} />
          Profile
        </MenuLi>
        <MenuLi focused={tab === "works"} onClick={() => setTab("works")}>
          <MenuIcon src={`${process.env.PUBLIC_URL}/images/wrkIcon.svg`} />
          Works
        </MenuLi>
        <MenuLi focused={tab === "contact"} onClick={() => setTab("contact")}>
          <MenuIcon src={`${process.env.PUBLIC_URL}/images/mailIcon.svg`} />
          Contact
        </MenuLi>
      </MenuUl>
    </Container>
  );
};
