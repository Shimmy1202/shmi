import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
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
`;

const MailBtn = styled.a`
  height: 40px;
  padding: 1.5em 5em;
  margin-top: 10vh;
  border-radius: 4px;
  display: flex;
  align-items: center;
  background-color: #f5f6fa;
  color: #42475a;
  font-weight: 700;
  letter-spacing: 0.2em;
  box-shadow: 3px 3px 4px #e4e5e9, -3px -3px 4px #ffffff,
    2px 2px 2px inset transparent, -2px -2px 2px inset transparent;
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #949494;
    box-shadow: 3px 3px 4px transparent, -3px -3px 4px transparent,
      2px 2px 2px #dddde1 inset, -2px -2px 2px #ffffff inset;
  }
`;

export const Contact = () => {
  return (
    <Container>
      <Title>Contact</Title>
      <MailBtn href="mailto:shimmy.usestudy@gmail.com">CONTACT ME</MailBtn>
    </Container>
  );
};
