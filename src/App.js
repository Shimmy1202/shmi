import { useState } from "react";
import styled from "styled-components";
import { Menu } from "./components/Menu";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { Works } from "./pages/Works";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Contents = styled.div`
  content: "";
  position: sticky;
  top: 80px;
  left: 0;
  right: 0;
  margin: 0 80px 0 40px;
  width: 100%;
  max-width: 900px;
  height: 6px;
  border-radius: 3px;
  box-shadow: 2px 2px 2px #e9eaee inset, -2px -2px 2px #fff inset;
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
`;

function App() {
  const [tab, setTab] = useState("profile");
  return (
    <Container>
      <Menu tab={tab} setTab={setTab} />
      <Contents>
        <Main>
          {tab === "profile" ? (
            <Profile />
          ) : tab === "works" ? (
            <Works />
          ) : tab === "contact" ? (
            <Contact />
          ) : (
            <h1>404Not Found</h1>
          )}
        </Main>
        <Footer>
          <Copyright>©︎ 2021 Shm!</Copyright>
        </Footer>
      </Contents>
    </Container>
  );
}

export default App;
