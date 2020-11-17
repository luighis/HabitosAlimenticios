import {Label, Input, DivForm, ContainInputs, InputSubmit} from './../utils/css';

const DatosBase = () => {







    return (
        <div className="max-width">
            <form>
                <ContainInputs>
                <DivForm>
                        <Label>Nombre:</Label>
                        <Input type="text" required/>
                    </DivForm>
                    <DivForm>
                        <Label>Apellido:</Label>
                        <Input type="text" required/>
                    </DivForm>
                    <DivForm>
                        <Label>Edad:</Label>
                        <Input type="text" required/>
                    </DivForm>
                    <DivForm>
                        <Label>Genero:</Label>
                        <Input  as="select" required>
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                        </Input>    
                    </DivForm>
                    <DivForm>
                        <Label>Correo:</Label>
                        <Input type="email" required/>
                    </DivForm>
                    <DivForm>
                        <Label>Ciudad:</Label>
                        <Input type="text" required/>
                    </DivForm>
                    <DivForm>
                        <Label>País:</Label>
                        <Input type="text" required/>
                    </DivForm>
                    <DivForm>
                        <Label>Zip:</Label>
                        <Input type="text" required/>
                    </DivForm>
                    <DivForm>
                        <Label>Dirección:</Label>
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
 
export default DatosBase;