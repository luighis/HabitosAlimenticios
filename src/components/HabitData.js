import { useState } from "react";
import consumptionTBM from "../utils/consumption";
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
  weight: "",
  height: "",
  goal: "",
};*/

const HabitData = ({ habitData, saveHabitData, saveConsumption, baseData }) => {
  const [values, setValues] = useState(habitData);

  const onChange = (event) => {
    setValues((oldValues) => ({
      ...oldValues,
      [event.target.id]: event.target.value,
      completeHabitData: true,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //setValues(initialData);
    saveHabitData(values);
    saveConsumption({ ...consumptionTBM(values, baseData) });
  };

  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        <ContainInputs>
          <DivForm>
            <Label htmlFor="weight">Peso(Kg):</Label>
            <Input
              id="weight"
              type="number"
              min="1"
              value={values.weight}
              onChange={onChange}
              title="Solo números"
              required
            />
          </DivForm>
          <DivForm>
            <Label htmlFor="height">Altura(cm):</Label>
            <Input
              id="height"
              type="number"
              min="1"
              value={values.height}
              onChange={onChange}
              title="Solo números"
              required
            />
          </DivForm>
          <DivForm>
            <Label htmlFor="goal">Peso meta(Kg):</Label>
            <Input
              id="goal"
              type="number"
              min="1"
              value={values.goal}
              onChange={onChange}
              title="Solo números"
              required
            />
          </DivForm>
        </ContainInputs>
        <DivForm>
          <InputSubmit type="submit" value="Calcular" />
        </DivForm>
      </form>
    </FormContainer>
  );
};

export default HabitData;
