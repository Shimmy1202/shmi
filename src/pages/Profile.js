import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: space-between;
  width: 100%;
  max-width: 960px;
  margin: 0 auto 100px;
`;

const Title = styled.h2`
  width: 100%;
  margin: 40px 0 68px;
  font-size: 30px;
  text-align: left;
  @media only screen and (max-width: 1024px) {
    text-align: center;
    margin-bottom: 32px;
  }
`;

const Txt = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: 200%;
  @media only screen and (max-width: 1024px) {
    margin: 0 32px;
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  width: 100%;
  @media only screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

const IconWrapper = styled.div`
  margin-right: 40px;
  max-width: 360px;
  @media only screen and (max-width: 599px) {
    margin: 0;
  }
`;

const Icon = styled.img`
  width: 100%;
  max-width: 196px;
  background-color: red;
  border-radius: 6px;
`;

const ProfUl = styled.ul`
  width: 50%;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 599px) {
    width: 86%;
    margin-top: 40px;
    > img {
      text-align: center;
    }
  }
`;

const ProfLi = styled.li`
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  background-color: #f5f6fa;
  color: #42475a;
  box-shadow: 3px 3px 4px #e4e5e9, -3px -3px 4px #ffffff;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const LiHeding = styled.p`
  position: relative;
  width: 24%;
  font-weight: 400;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 16px;
    bottom: 0;
    margin: auto 0;
    width: 4px;
    height: 100%;
    border-radius: 3px;
    box-shadow: 2px 2px 2px #e9eaee inset, -2px -2px 2px #fff inset;
  }
  @media only screen and (max-width: 1024px) {
    width: 30%;
  }
`;

const LiData = styled.p`
  width: 70%;
`;

export const Profile = () => {
  return (
    <Container>
      <Title>Profile</Title>
      <Txt>
        東京の専門学校でWeb開発について学んでいる学生です。
        <br />
        ジャンルを問わず音楽,
        アート,映画鑑賞が好きで、よく「多趣味」だと言われます。
        <br />
        最近はUI/UXデザインやReact.js, firebaseの勉強をしています。
        <br />
        <br />
        このポートフォリオサイトも以前から気になっていたニューモフィズムデザインを参考にして、フロントエンドにReact.js、サイトのホスティングにfirebaseを使用して制作しました。
      </Txt>
      <IntroWrapper>
        <IconWrapper>
          <Icon
            src={`${process.env.PUBLIC_URL}/images/myicon.jpg`}
            alt="アイコン"
          />
        </IconWrapper>
        <ProfUl>
          <ProfLi>
            <LiHeding>Name</LiHeding>
            <LiData>Shimizu Yuto</LiData>
          </ProfLi>
          <ProfLi>
            <LiHeding>Birth</LiHeding>
            <LiData>1999/03/18</LiData>
          </ProfLi>
          <ProfLi>
            <LiHeding>From</LiHeding>
            <LiData>東京都</LiData>
          </ProfLi>
          <ProfLi>
            <LiHeding>Interest</LiHeding>
            <LiData>React, UI/UX, Figma</LiData>
          </ProfLi>
          <ProfLi>
            <LiHeding>Motto</LiHeding>
            <LiData>
              できると決断しなさい。方法などは後から見つければいいのだ。
            </LiData>
          </ProfLi>
        </ProfUl>
      </IntroWrapper>
    </Container>
  );
};
