import { useState } from "react";
import { connect } from "react-redux";
import { saveBaseData } from "../redux/actions/baseDataActions";
import { useHistory } from "react-router-dom";
import {
  Label,
  Input,
  DivForm,
  ContainInputs,
  InputSubmit,
  FormContainer,
} from "../utils/css";
/*
const initialData = {
  name: "",
  surname: "",
  age: "",
  gender: "",
  mail: "",
  city: "",
  country: "",
  zip: "",
  address: "",
};*/

const BaseData = ({ saveBaseData, baseData }) => {
  const [values, setValues] = useState(baseData);
  let history = useHistory();
  const onChange = (event) => {
    setValues((oldValues) => ({
      ...oldValues,
      [event.target.id]: event.target.value,
      completeDataBase: true,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    saveBaseData(values);
    history.push("/habitos");
    //setValues(initialData);
  };

  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        <ContainInputs>
          <DivForm>
            <Label htmlFor="name">Nombre:</Label>
            <Input
              id="name"
              type="text"
              value={values.name}
              onChange={onChange}
              pattern="[A-Za-z]{2,40}"
              title="Solo letras/palabras"
              required
            />
          </DivForm>
          <DivForm>
            <Label htmlFor="surname">Apellido:</Label>
            <Input
              id="surname"
              type="text"
              value={values.surname}
              onChange={onChange}
              pattern="[A-Za-z]{2,40}"
              title="Solo letras/palabras"
              required
            />
          </DivForm>
          <DivForm>
            <Label htmlFor="age">Edad:</Label>
            <Input
              id="age"
              type="number"
              min="1"
              value={values.age}
              onChange={onChange}
              title="Solo números"
              required
            />
          </DivForm>
          <DivForm>
            <Label htmlFor="gender">Género:</Label>
            <Input
              id="gender"
              as="select"
              className="select"
              value={values.gender}
              onChange={onChange}
              required
            >
              <option value="">Seleccionar género</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
            </Input>
          </DivForm>
          <DivForm>
            <Label htmlFor="mail">Correo:</Label>
            <Input
              id="mail"
              type="email"
              value={values.mail}
              onChange={onChange}
              required
            />
          </DivForm>
          <DivForm>
            <Label htmlFor="city">Ciudad:</Label>
            <Input
              id="city"
              type="text"
              value={values.city}
              onChange={onChange}
              pattern="[A-Za-z]{2,40}"
              title="Solo letras/palabras"
              required
            />
          </DivForm>
          <DivForm>
            <Label htmlFor="country">País:</Label>
            <Input
              id="country"
              type="text"
              value={values.country}
              onChange={onChange}
              pattern="[A-Za-z]{2,40}"
              title="Solo letras/palabras"
              required
            />
          </DivForm>
          <DivForm>
            <Label htmlFor="zip">Zip:</Label>
            <Input
              id="zip"
              type="text"
              value={values.zip}
              onChange={onChange}
              required
            />
          </DivForm>
          <DivForm>
            <Label htmlFor="address">Dirección:</Label>
            <Input
              id="address"
              type="text"
              value={values.address}
              onChange={onChange}
              required
            />
          </DivForm>
        </ContainInputs>
        <DivForm>
          <InputSubmit type="submit" value="Enviar" />
        </DivForm>
      </form>
    </FormContainer>
  );
};

const mapStateToProps = ({ baseData }) => ({
  baseData,
});

/*
const mapDispatchToProps = (dispatch) => {
  return { saveBaseData: (data) => dispatch(saveBaseData(data)) };
};
*/
/*
const mapDispatchToProps = () => {
  return { saveBaseData };
};
*/
//const mapDispatch = { saveBaseData };

export default connect(mapStateToProps, { saveBaseData })(BaseData);
