import React, { useContext } from "react";
import UserContext from "./User";

const composePromise = (...fns) => x =>
  fns.reduce((acc, val) => acc.then(val), Promise.resolve(x));

const composeActions = fns => {
  return async () => {
    try {
      await composePromise(...fns)();
    } catch (e) {
      console.log("error", e);
    }
  };
};

const LoginLogoutButtonContainer = ({ actions }) => {
  const { currentUser, setCurrentUser, clearCurrentUser } = useContext(
    UserContext
  );

  return (
    <LoginLogoutButton
      currentUser={currentUser}
      onLoginClick={composeActions([actions.login, setCurrentUser])}
    />
  );
};

const LoginLogoutButton = ({ currentUser, onLogoutClick, onLoginClick }) => {
  if (currentUser) {
    return <button onClick={onLogoutClick}>Logout</button>;
  }

  return <button onClick={onLoginClick}>Login</button>;
};

export default LoginLogoutButtonContainer;
