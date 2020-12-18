import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Modal from "./Modal";
import { connect } from "react-redux";

const rotate = keyframes`
    from {
        transform:translateX(-150px);
    }

    to {
        transform:translateX(0px);
    }
`;

const Nav = styled.nav.attrs((props) => ({
  className: props.className,
}))`
  position: absolute;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  background-color: #2a2836;
  padding-bottom: 30px;
  & a {
    display: inline-block;
    margin: 30px 18px 0;
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
    animation: ${rotate} 0.4s ease-in;
  }
  & .selected span {
    display: block;
    border-bottom: 1px solid #8167e6;
    margin-top: 5px;
  }
  &.menu-fixed {
    position: fixed;
    top: 0;
    background-color: #8167e6;
    transition: all 0.3s linear;
  }
  &.menu-fixed a:hover span {
    border-bottom: 1px solid #fff;
  }
  &.menu-fixed .selected span {
    border-bottom: 1px solid #fff;
  }
  @media (max-width: 420px) {
    & a {
      margin: 30px 10px 0;
      font-size: 12px;
    }
  }
`;

const Navbar = ({ completeDataBase, completeHabitData }) => {
  const [link, setLink] = useState(false);
  const [text, setText] = useState("");
  const nodoNav = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (window.pageYOffset > 76) nodoNav.current.classList.add("menu-fixed");
      else nodoNav.current.classList.remove("menu-fixed");
      console.log(window.pageYOffset);
    };
    window.addEventListener("scroll", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOnClick = (complete, text) => {
    if (!complete) {
      setText(text);
      setLink(true);
    }
  };

  const handleOnclickModal = () => {
    setLink(false);
  };
  return (
    <Nav ref={nodoNav}>
      <NavLink exact activeClassName="selected" to="/">
        Datos Bases <span></span>
      </NavLink>
      <NavLink
        exact
        activeClassName="selected"
        to={completeDataBase ? "/habitos" : "!"}
        onClick={() => handleOnClick(completeDataBase, "Datos Bases")}
      >
        Datos Alimenticios <span></span>
      </NavLink>
      <NavLink
        exact
        activeClassName="selected"
        to={completeHabitData ? "/resumen" : "!"}
        onClick={() =>
          handleOnClick(completeHabitData, "Datos Bases y Datos Alimenticios")
        }
      >
        Resumen<span></span>
      </NavLink>

      {link && <Modal text={text} onCloseModal={handleOnclickModal} />}
    </Nav>
  );
};

const mapStateToProps = (state) => ({
  completeDataBase: state.baseData.completeDataBase,
  completeHabitData: state.habitData.completeHabitData,
});
export default connect(mapStateToProps)(Navbar);
