import styled from "styled-components";

const DivModal = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  && > div {
    background-color: #fefefe;
    margin: auto;
    padding: 30px;
    border: 1px solid #888;
    max-width: 500px;
    width: 90%;
    position: relative;
    text-align: center;
  }
  && .close {
    position: absolute;
    top: 7px;
    right: 10px;
    cursor: pointer;
    font-size: 17px;
  }
  && .close:hover {
    color: #5843aa;
    transition: 0.3s;
  }
`;

const Modal = ({ text, onCloseModal }) => {
  const handleOnClick = ({ target }) => {
    if (target.matches(".contain-modal")) {
      onCloseModal();
    }
  };

  return (
    <DivModal className="contain-modal" onClick={handleOnClick}>
      <div>
        Por favor, primero complete el formulario de <strong>{text}</strong>
        <div className="close" onClick={onCloseModal}>
          X
        </div>
      </div>
    </DivModal>
  );
};

export default Modal;
