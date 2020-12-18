import styled from "styled-components";
import imgSelect from "./../img/a.svg";

/* inputs - form */
export const FormContainer = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Input = styled.input.attrs((props) => ({
  className: props.className,
}))`
  padding: 8px;
  margin-bottom: 20px;
  border: solid 1px #aaa;
  background: none;
  border-radius: 6px;
  height: auto;
  box-shadow: none;
  color: #333;
  font-size: 16px;
  width: 100%;
  font-family: inherit;
  outline: none;
  transition: 0.7s;
  &:focus {
    border: 1px solid #8167e6;
    background: #f0f4fd;
  }
  &:focus:invalid {
    border: 1px solid #360075;
    box-shadow: 0 0 3px #360075;
  }
  &.select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-image: url(${imgSelect});
    background-repeat: no-repeat;
    background-position: right 11px top 50%, 0 0;
    background-size: 13px auto, 100%;
  }
`;

export const Label = styled.label`
  color: #071c39;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 8px;
  display: inline-block;
`;

export const DivForm = styled.div`
  width: 47%;
  @media (max-width: 472px) {
    width: 100%;
  }
`;

export const ContainInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 25px 0 5px;
`;

export const InputSubmit = styled.input`
  color: #fff;
  border-radius: 30px;
  outline: none;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 30px;
  min-width: 120px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  background: #8167e6;
  border: 1px solid transparent;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.7s;
  &:hover {
    box-shadow: 2px 2px 20px 0px rgba(20, 20, 20, 0.4);
  }
`;
