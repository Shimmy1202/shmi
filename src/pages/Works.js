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
`;

const WorkUl = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
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
    }
  }
  > a {
    &:link {
      color: #42475a;
    }
    &:hover {
      color: #949494;
    }
    &:visited {
      transition: box-shadow 0.3s ease-in-out;
      color: #42475a;
    }
  }
`;

const WorkImg = styled.img`
  width: 100%;
  max-width: 430px;
  max-height: 216px;
  object-fit: cover;
  border: solid 1px #eeeeee;
  border-radius: 6px;
`;

const WorkName = styled.p`
  margin: 16px 0 0;
  font-weight: 600;
`;

export const Works = () => {
  return (
    <Container>
      <Title>Works</Title>
      <div>
        <WorkUl>
          <WorkLi>
            <WorkImg src={`${process.env.PUBLIC_URL}/images/portfolio.png`} />
            <WorkName>【Shm!】ポートフォリオサイト version1.0</WorkName>
          </WorkLi>
          <WorkLi>
            <WorkImg src={`${process.env.PUBLIC_URL}/images/angfa.png`} />
            <WorkName>
              産学連携 アンファー株式会社「LP制作」デザイン賞受賞作品
            </WorkName>
          </WorkLi>
          <WorkLi>
            <a href="https://github.com/h-jun01/yakei" target="_blank">
              <WorkImg src={`${process.env.PUBLIC_URL}/images/yakei.png`} />
              <WorkName>
                【YAKEI】U-22プログラミングコンテスト2020 応募作品
              </WorkName>
            </a>
          </WorkLi>
          <WorkLi>
            <a href="https://hew-funfiction.web.app/" target="_blank">
              <WorkImg
                src={`${process.env.PUBLIC_URL}/images/funfiction.png`}
              />
              <WorkName>
                【FunFiction】2年次学内コンテスト「HAL EVENT WEEK
                2020」銅賞受賞作品
              </WorkName>
            </a>
          </WorkLi>
          <WorkLi>
            <a href="https://youtu.be/Oft-5r43k7o?t=1807" target="_blank">
              <WorkImg src={`${process.env.PUBLIC_URL}/images/b-unlock.png`} />
              <WorkName>
                【FunFiction】2年次学内コンテスト「HAL EVENT WEEK
                2020」銅賞受賞作品
              </WorkName>
            </a>
          </WorkLi>
        </WorkUl>
      </div>
    </Container>
  );
};
