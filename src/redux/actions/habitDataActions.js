export const SAVE_HABIT_DATA = "SAVE_HABIT_DATA";
export const GET_HABIT_DATA = "GET_HABIT_DATA";

export const getHabitData = () => {
  return {
    type: GET_HABIT_DATA,
  };
};

export const saveHabitData = (data) => {
  return {
    type: SAVE_HABIT_DATA,
    data,
  };
};
