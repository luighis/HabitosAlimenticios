import * as actions from "./../actions/habitDataActions";

const initialData = {
  weight: "",
  height: "",
  goal: "",
  completeHabitData: false,
};

const habitDataReducer = (state = initialData, action) => {
  switch (action.type) {
    case actions.SAVE_HABIT_DATA:
      return action.data;

    default:
      return state;
  }
};

export default habitDataReducer;
