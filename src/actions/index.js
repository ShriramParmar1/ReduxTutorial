export const InNum = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const DeNum = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};
