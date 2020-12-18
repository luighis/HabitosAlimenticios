import * as actions from "../actions/consumptionActions";

const initialData = {
  cb: "",
  cd: "",
};

const consumptionReducer = (state = initialData, action) => {
  switch (action.type) {
    case actions.SAVE_CONSUMPTION:
      return action.data;

    default:
      return state;
  }
};

export default consumptionReducer;
