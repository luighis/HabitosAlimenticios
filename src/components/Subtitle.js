import styled from "styled-components";
import Img from "./../img/1.jpg";
const Div = styled.div`
    background: url(${Img});
    text-align: center;
    padding: 100px 0 100px 0;
    & h2 {
        font-size: 46px;
        margin-top: 50px;
        margin-bottom: 10px;
        color: #071c39;
        font-weight: bold;
        color: #fff;
    }

    & p {
        margin-bottom: 40px;
        color: #fff;
    }
`;


const Subtitle = ({subtitle, paragraph='Ingrese sus datos, por favor'}) => (
  <Div>
    <h2>{subtitle}</h2>
    <p>{paragraph}</p>
  </Div>
);

export default Subtitle;