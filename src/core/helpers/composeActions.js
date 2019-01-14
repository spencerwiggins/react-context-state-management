import composePromise from "./composePromise";

const composeActions = fns => {
  return async () => {
    try {
      await composePromise(...fns)();
    } catch (e) {
      console.log("error", e);
    }
  };
};

export default composeActions;
