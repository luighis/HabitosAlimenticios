import {
  Label,
  Input,
  DivForm,
  ContainInputs,
  FormContainer,
} from "../utils/css";

const TBM = ({ consumptionData }) => {
  let { cb, cd } = consumptionData;
  cb = `${cb} kcal/día`;
  cd = `${cd} kcal/día`;
  return (
    <FormContainer>
      <ContainInputs>
        <DivForm>
          <Label htmlFor="cb">Cálculo de consumo basal:</Label>
          <Input id="cb" type="text" value={cb} readOnly />
        </DivForm>
        <DivForm>
          <Label htmlFor="cd">Cálculo de consumo diario - meta:</Label>
          <Input id="cd" type="text" value={cd} readOnly />
        </DivForm>
      </ContainInputs>
    </FormContainer>
  );
};

export default TBM;
