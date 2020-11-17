import styled from "styled-components";

const FooterPage = styled.footer`
border-top: solid 1px #eeeeee;
margin-top: 40px;
padding: 20px 0 20px 0;
text-align: center;
color: #595d69;
font-size: 14px;
`;


const Footer = () => (
  <FooterPage>
    <p>© Copyright 2020 - App Hábitos Alimenticios</p>
  </FooterPage>
);

export default Footer;
