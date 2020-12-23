export const makeActionCreator = (type) => (...args) => {
  const action = { type };
  action['payload'] = args[0];
  return action;
};