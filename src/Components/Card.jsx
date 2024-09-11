import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { useCharStates } from "../Components/utils/global.context";



const Card = ({ id, dentista }) => {
  const { dispatch } = useCharStates();
  const addFav = () => {
    dispatch({type: "ADD_FAV", payload: dentista});
    alert(`Dentista ${dentista.name} añadido a favoritos!`);
  };

  return (
    <div className="card">
      <img style={{ width: "270px" }} src="/images/doctor.jpg" alt="dentista" />
      <Link to={routes.detail + dentista.id}>
        <h3>{dentista.name}</h3>
      </Link>
      <p>{dentista.username}</p>
      <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
