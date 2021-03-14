import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Menu } from "./components/Menu";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { Works } from "./pages/Works";

const Container = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Contents = styled.div`
  content: "";
  position: sticky;
  top: 80px;
  left: 0;
  right: 0;
  margin: 0 40px;
  width: 100%;
  max-width: 900px;
  height: 6px;
  border-radius: 3px;
  box-shadow: 2px 2px 2px #e9eaee inset, -2px -2px 2px #fff inset;
  @media only screen and (max-width: 1024px) {
    max-width: 90%;
    margin: 0 auto;
  }
`;

const Main = styled.main`
  padding: 0 6px;
  margin-top: 5px;
  width: 100%;
  height: calc(100vh - 171px);
  overflow: scroll;
  /* IE, Edge 対応 */
  -ms-overflow-style: none;
  /* Firefox 対応 */
  scrollbar-width: none;
  background-color: #f5f6fa;
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 1024px) {
    height: calc(100vh - 180px);
  }
`;

const MainSwitch = styled(Switch)`
  height: 100%;
`;

const Footer = styled.footer`
  content: "";
  position: inherit;
  bottom: 80px;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 900px;
  height: 6px;
  border-radius: 3px;
  box-shadow: 2px 2px 2px #e9eaee inset, -2px -2px 2px #fff inset;
  @media only screen and (max-width: 1024px) {
    bottom: 0;
  }
`;

const Copyright = styled.small`
  display: block;
  width: 100%;
  padding-top: 34px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: #949494;
  @media only screen and (max-width: 1024px) {
    padding-top: 16px;
    font-size: 14px;
  }
`;

function App() {
  return (
    <Container>
      <Router>
        <Menu />
        <Contents>
          <Main>
            <MainSwitch>
              <Route exact path="/" component={Profile} />
              <Route path="/works" component={Works} />
              <Route path="/contact" component={Contact} />
            </MainSwitch>
          </Main>
          <Footer>
            <Copyright>©︎ 2021 Shm!</Copyright>
          </Footer>
        </Contents>
      </Router>
    </Container>
  );
}

export default App;
