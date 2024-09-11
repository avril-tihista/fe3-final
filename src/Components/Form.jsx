import React, { useState } from "react";
import Message from "../Components/Message";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (event) => {
    setCustomer({ ...customer, name: event.target.value });
  };

  const handleChangeEmail = (event) => {
    setCustomer({ ...customer, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (customer.name.trim().length >= 5 &&
        emailRegex.test(customer.email)) {
      setError(false);
      setShow(true);
      return;
    }else {
      setError(true);
    }
  };

  const reset = () => {
    setCustomer({
      name: "",
      address: "",
    });
  };

  return (
    <>
      {show ? (
        <Message customer={customer} />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input
              type="text"
              value={customer.name}
              onChange={handleChangeName}
            />
            <label>Email: </label>
            <input
              type="email"
              value={customer.email}
              onChange={handleChangeEmail}
            />
            <button>Enviar</button>
            <button onClick={reset}>Reset form</button>
          </form>

          
        </>
      )}

      {error && (
        <h4 style={{ color: "red" }}>Por favor, verifique su información</h4>
      )}
    </>
  );
};

export default Form;