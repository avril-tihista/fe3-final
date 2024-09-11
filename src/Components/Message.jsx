import React from "react";

const Message = ({ customer }) => {
  return (
    <>
      <h4>Gracias {customer.name}!</h4>
      <h4>
       Te contactaremos cuanto antes vía mail {customer.email}
      </h4>
    </>
  );
};

export default Message;