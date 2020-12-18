import styled from "styled-components";
import Img from "./../img/3.jpg";
const Div = styled.div`
  background: url(${Img});
  text-align: center;
  padding: 100px 0 100px 0;
  & h2 {
    font-size: 46px;
    margin-top: 50px;
    margin-bottom: 10px;
    font-weight: bold;
    color: #fff;
  }

  & p {
    margin-bottom: 40px;
    color: #fff;
  }
`;

const Subtitle = ({ subtitle, paragraph }) => (
  <Div>
    <h2>{subtitle}</h2>
    <p>{paragraph}</p>
  </Div>
);

export default Subtitle;
