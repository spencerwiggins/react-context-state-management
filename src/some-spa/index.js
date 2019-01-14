import React from "react";
import { UserProvider } from "../core/User";
import IdCard from "../feature/IdCard";
import LoginLogoutButton from "../core/LoginLogoutButton";
import loginActions from "./actions/loginActions";

export default () => (
  <UserProvider>
    <IdCard />
    <LoginLogoutButton actions={loginActions} />
  </UserProvider>
);
