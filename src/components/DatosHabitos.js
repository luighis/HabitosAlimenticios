
import {Label, Input, DivForm, ContainInputs, InputSubmit} from './../utils/css';


const DatosHabitos = () => {




    return (
        <div className="max-width">
            <form>
                <ContainInputs>
                <DivForm>
                        <Label>Peso:</Label>
                        <Input type="text" required/>
                    </DivForm>
                    <DivForm>
                        <Label>Altura:</Label>
                        <Input type="text" required/>
                    </DivForm>
                    <DivForm>
                        <Label>Calculo de consumo basal:</Label>
                        <Input type="text" required/>
                    </DivForm>
                    <DivForm>
                        <Label>Calculo de consumo diario:</Label>
                        <Input type="text" required/>
                    </DivForm>
                </ContainInputs>
                <DivForm>
                    <InputSubmit type="submit" value="Enviar" required/>
                </DivForm>
            </form> 
        </div>
    )
}

export default DatosHabitos;