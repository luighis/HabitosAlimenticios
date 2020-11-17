import styled from "styled-components";


/* inputs - form */
export const Input = styled.input`
padding: 8px;
margin-bottom: 20px;
border: solid 1px #cccccc;
background: none;
border-radius: 6px;
height: auto;
box-shadow: none;
color: #333;
font-size: 16px;
width: 100%;
font-family: inherit;
outline: none;
transition: .7s;
&:focus {
    border: 1px solid #8167e6;
    background: #f0f4fd;
}
`;

export const Label = styled.label`
color: #071c39;
font-weight: 500;
font-size: 16px;
margin-bottom: 8px;
display: block;
`;

export const DivForm = styled.div`
width: 47%;
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
transition: .7s;
&:hover {
    box-shadow: 2px 2px 20px 0px rgba(20,20,20, 0.3);
}
`;
