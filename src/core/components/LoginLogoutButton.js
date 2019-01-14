import React, { useContext } from "react";
import UserContext from "./User";
import composeActions from "../helpers/composeActions";

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
