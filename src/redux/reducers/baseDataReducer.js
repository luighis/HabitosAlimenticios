import * as actions from "./../actions/baseDataActions";

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
  completeDataBase: false,
};

const baseDataReducer = (state = initialData, action) => {
  switch (action.type) {
    case actions.SAVE_BASE_DATA:
      return action.data;
    default:
      return state;
  }
};

export default baseDataReducer;
