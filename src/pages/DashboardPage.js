import Section from "./../components/Section";
import Subtitle from "./../components/Subtitle";
import BaseData from "../components/BaseData";

const DashboarPage = () => (
  <>
    <Subtitle subtitle="Datos" paragraph="Ingrese sus datos, por favor" />
    <Section
      subtitleSection="Necesitamos registrar sus datos"
      paragraphSection="Con estos datos, nos será más fácil, preparar un resumen general "
    />
    <BaseData />
  </>
);

export default DashboarPage;
