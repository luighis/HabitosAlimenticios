export const SAVE_CONSUMPTION = "SAVE_CONSUMPTION";
export const GET_CONSUMPTION = "GET_CONSUMPTION";

export const saveConsumption = (data) => {
  return {
    type: SAVE_CONSUMPTION,
    data,
  };
};
