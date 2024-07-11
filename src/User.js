import React from "react";
const User = (props) => {
  const { data } = props;
  return (
    <div>
      <h1>user components</h1>
      <h1>{data.name}</h1>
    </div>
  );
};
export default User;
