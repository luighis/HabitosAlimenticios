import styled from "styled-components";

const Header = styled.header`
  padding: 20px 0;
  background-color: #8167e6;
  color: #fff;
  text-align: center;
  & h1 {
    font-size: 30px;
  }
  @media (max-width: 420px) {
    & h1 {
      font-size: 22px;
    }
  }
`;

const Head = () => (
  <Header>
    <h1>App Hábitos Alimenticios</h1>
  </Header>
);

export default Head;
