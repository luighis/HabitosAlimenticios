import Section from "./../components/Section";
import Subtitle from "./../components/Subtitle";
import DatosBase from "./../components/DatosBase";

const DashboarPage = () => (
  <>
    <Subtitle subtitle="Datos" />
    <Section
      subtitleSection="Necesitamos registrar sus datos"
      paragraphSection="Con estos datos, nos será más fácil, preparar un resumen general "
    />
    <DatosBase />
  </>
);

export default DashboarPage;
