import Section from "./../components/Section";
import Subtitle from "./../components/Subtitle";
import DatosHabitos from "./../components/DatosHabitos";

const HabitosPage = () => (
  <>
    <Subtitle subtitle="Hábitos" />
    <Section
      subtitleSection="Necesitamos registrar sus datos de sus hábitos alimenticios"
      paragraphSection="Con estos datos, nos será más fácil, preparar un resumen general  con cálculo de consumo diario, cálculo de consumo basal entre otros..."
    />
    <DatosHabitos />
  </>
);

export default HabitosPage;
