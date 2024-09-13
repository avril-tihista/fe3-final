import { createContext,  useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { reducer } from "../../reducers/reducer";

export const ContextGlobal = createContext(undefined);

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
    theme: "light", 
    chars: [],
    favs: lsFavs,
  }

export const ContextProvider = ({ children }) => {
  /*const [theme, setTheme] = useState(initialState.theme);
  const [chars, setChars] = useState([]);
  const [favs, setFavs] = useState(lsFavs);*/
 
  const [state, dispatch] = useReducer(reducer, initialState)
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      /*setChars(res.data.results);*/
      dispatch({type: "GET_CHARS", payload: res.data.results})
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  const changeTheme = () => {
    dispatch({type: "CHANGE_THEME"});
  };

  return (
    <ContextGlobal.Provider value={{state, dispatch, changeTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useCharStates = () => useContext(ContextGlobal);