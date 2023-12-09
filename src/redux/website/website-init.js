const colors = ['red', 'green', 'orange', 'blue'];

export const initialState = {
  color: colors[Math.floor(Math.random() * colors.length)],
};
