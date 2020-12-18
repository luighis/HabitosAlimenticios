export const SAVE_BASE_DATA = "SAVE_BASE_DATA";
export const GET_BASE_DATA = "GET_BASE_DATA";

export const getBaseData = () => {
  return {
    type: GET_BASE_DATA,
  };
};

export const saveBaseData = (data) => {
  return {
    type: SAVE_BASE_DATA,
    data,
  };
};
