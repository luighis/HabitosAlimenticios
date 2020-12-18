import styled from "styled-components";

const Div = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
  font-size: 16px;
  & h2 {
    font-size: 24px;
    margin-bottom: 25px;
    color: #071c39;
    font-weight: bold;
  }

  & p {
    margin-bottom: 20px;
    color: #595d69;
  }
`;

const Section = ({ subtitleSection, paragraphSection }) => (
  <Div>
    <h2>{subtitleSection}</h2>
    <p>{paragraphSection}</p>
  </Div>
);

export default Section;
