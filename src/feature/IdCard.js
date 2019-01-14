import React, { useContext } from "react";
import UserContext from "../core/User";

const IdCardContainer = () => {
  const { currentUser } = useContext(UserContext);

  if (currentUser) {
    return <IdCard name={currentUser.name} />;
  }

  return <div />;
};

const IdCard = ({ name }) => {
  return <div>hello {name}</div>;
};

export default IdCardContainer;
