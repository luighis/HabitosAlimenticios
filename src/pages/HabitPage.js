import Section from "../components/Section";
import Subtitle from "../components/Subtitle";
import HabitData from "../components/HabitData";
import TBM from "../components/TBM";
import { saveHabitData } from "../redux/actions/habitDataActions";
import { saveConsumption } from "../redux/actions/consumptionActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const HabitPage = ({
  baseData,
  saveHabitData,
  habitData,
  consumptionData,
  saveConsumption,
}) => {
  let history = useHistory();
  const { completeDataBase } = baseData;
  const { completeHabitData } = habitData;
  if (!completeDataBase) history.push("/");

  return (
    <>
      <Subtitle subtitle="Hábitos" paragraph="Ingrese sus hábitos, por favor" />
      <Section
        subtitleSection="Necesitamos registrar datos de sus hábitos alimenticios"
        paragraphSection="Con estos datos, nos será más fácil, preparar un resumen general  con cálculo de consumo diario, cálculo de consumo basal entre otros..."
      />
      <HabitData
        saveHabitData={saveHabitData}
        habitData={habitData}
        baseData={baseData}
        saveConsumption={saveConsumption}
      />

      {completeHabitData && <TBM consumptionData={consumptionData} />}
    </>
  );
};

const mapStateToProps = (state) => ({
  baseData: state.baseData,
  habitData: state.habitData,
  consumptionData: state.consumptionData,
});

const mapDispatchToProps = {
  saveHabitData,
  saveConsumption,
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitPage);
