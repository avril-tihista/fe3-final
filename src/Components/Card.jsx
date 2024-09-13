import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { useCharStates } from "../Components/utils/global.context";



const Card = ({ id, dentista }) => {
  const { state, dispatch } = useCharStates();

  const isFav = state.favs.find((fav) => fav.id == dentista.id);

  const addFav = () => {
    /*dispatch({type: "ADD_FAV", payload: dentista});*/
    if (isFav) {
      dispatch({ type: "REMOVE_FAV", payload: dentista });
      alert(`Dentista ${dentista.name} eliminado de favoritos!`);
    } else {
      dispatch({ type: "ADD_FAV", payload: dentista });
      alert(`Dentista ${dentista.name} añadido a favoritos!`);
    }
  };

  return (
    <div className="card">
      <img style={{ width: "300px", borderRadius: "5px" }} src="/images/doctor.jpg" alt="dentista" />
      <Link to={routes.detail + dentista.id}>
        <h3>{dentista.name}</h3>
      </Link>
      <p>{dentista.username}</p>
      <button onClick={addFav} className="favButton">{isFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card;
