import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: space-between;
  width: 100%;
  max-width: 960px;
  margin: 0 auto 40px;
`;

const Title = styled.h2`
  width: 100%;
  margin: 40px 0 68px;
  font-size: 30px;
  text-align: left;
  @media only screen and (max-width: 1024px) {
    margin-bottom: 32px;
    text-align: center;
  }
`;

const WorkUl = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 599px) {
    justify-content: center;
  }
`;

const WorkLi = styled.li`
  width: 47%;
  padding: 16px;
  margin-bottom: 60px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background-color: #f5f6fa;
  color: #42475a;
  box-shadow: 3px 3px 4px #e4e5e9, -3px -3px 4px #ffffff,
    2px 2px 2px inset transparent, -2px -2px 2px inset transparent;
  transition: box-shadow 0.3s ease-in-out;
  &:not(:nth-child(1), :nth-child(2)) {
    cursor: pointer;
    &:hover {
      color: #949494;
      box-shadow: 3px 3px 4px transparent, -3px -3px 4px transparent,
        2px 2px 2px #dddde1 inset, -2px -2px 2px #ffffff inset;
      > a {
        > p {
          color: #949494;
        }
        > img {
          opacity: 0.7;
        }
      }
    }
  }
  @media only screen and (max-width: 599px) {
    width: 88%;
    margin-bottom: 24px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  max-width: 430px;
  max-height: 216px;
  object-fit: cover;
  border: solid 1px #eeeeee;
  border-radius: 6px;
  transition: opacity 0.3s ease-in-out;
`;

const CardTitle = styled.p`
  margin: 10px 0 0;
  color: #42475a;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  transition: color 0.3s ease-in-out;
`;

const CardRole = styled.p`
  color: #949494;
  margin-top: 5px;
  font-weight: 400;
  font-size: 14px;
`;

export const Works = () => {
  return (
    <Container>
      <Title>Works</Title>
      <div>
        <WorkUl>
          <WorkLi>
            <CardImg src={`${process.env.PUBLIC_URL}/images/portfolio.png`} />
            <CardTitle>Shm!</CardTitle>
            <CardRole>UI/UX デザイン,コーディング</CardRole>
          </WorkLi>
          <WorkLi>
            <CardImg src={`${process.env.PUBLIC_URL}/images/angfa.png`} />
            <CardTitle>スカルプD baby LPサイトリニューアル</CardTitle>
            <CardRole>UX/UI デザイン</CardRole>
          </WorkLi>
          <WorkLi>
            <a href="https://github.com/h-jun01/yakei" target="_blank">
              <CardImg src={`${process.env.PUBLIC_URL}/images/yakei.png`} />
              <CardTitle>YAKEI</CardTitle>
              <CardRole>UX/UI デザイン</CardRole>
            </a>
          </WorkLi>
          <WorkLi>
            <a href="https://hew-funfiction.web.app/" target="_blank">
              <CardImg
                src={`${process.env.PUBLIC_URL}/images/funfiction.png`}
              />
              <CardTitle>FunFiction</CardTitle>
              <CardRole>企画,UI/UX デザイン</CardRole>
            </a>
          </WorkLi>
          <WorkLi>
            <a href="https://youtu.be/Oft-5r43k7o?t=1807" target="_blank">
              <CardImg src={`${process.env.PUBLIC_URL}/images/b-unlock.png`} />
              <CardTitle>b-UNLOCK</CardTitle>
              <CardRole>企画,UI/UX デザイン</CardRole>
            </a>
          </WorkLi>
        </WorkUl>
      </div>
    </Container>
  );
};
