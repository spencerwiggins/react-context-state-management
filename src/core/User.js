import React, { createContext, useState, useContext } from "react";

const initialState = {
  currentUser: null
};

const UserContext = createContext(initialState);
const { Provider, Consumer } = UserContext;

const UserProvider = props => {
  const [state, setState] = useState(initialState);

  const actions = {
    setCurrentUser: user => {
      console.log("setCurrentUser:", user);
      setState({
        currentUser: user
      });
    },
    clearCurrentUser: () => {
      setState({
        currentUser: null
      });
    }
  };

  return <Provider value={{ ...state, ...actions }}>{props.children}</Provider>;
};

export default UserContext;
export { UserProvider, Consumer as UserConsumer };
