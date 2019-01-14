import React from "react";

import { UserProvider } from "../core/components/User";
import LoginLogoutButton from "../core/components/LoginLogoutButton";
import IdCard from "../feature/IdCard";
import loginActions from "./actions/loginActions";

export default () => (
  <UserProvider>
    <IdCard />
    <LoginLogoutButton actions={loginActions} />
  </UserProvider>
);
