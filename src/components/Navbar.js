import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";

const rotate = keyframes`
  from {
    transform:translateX(-130px);
  }

  to {
    transform:translateX(0px);
  }
`;

const Nav = styled.nav`
  position: absolute;
  top: 80px;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  & a {
    display: inline-block;
    margin: 30px 18px;
    text-decoration: none;
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 500;
    font-size: 13px;
    text-transform: uppercase;
    overflow: hidden;
    vertical-align: top;
  }
  & a:hover span {
    display: block;
    border-bottom: 1px solid #8167e6;
    margin-top: 5px;
    animation: ${rotate} .3s linear;
    
  }
`;


const Navbar = () => (
  <Nav>
    <Link to="/">Datos Bases <span></span></Link>
    <Link to="/HabitosPage">Datos Alimenticios <span></span></Link>
  </Nav>
);

export default Navbar;
