import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ContextGlobal } from './utils/global.context';
import { routes } from "./utils/routes";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, changeTheme } = useContext(ContextGlobal);

  const themeIcon = state.theme === 'light' ? '🌙' : '☀️';
  const buttonClass = state.theme === 'light' ? 'theme-button light' : 'theme-button dark';
  const themeAlt = state.theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';

  return (
    <nav>
      <img className="logo" src="/images/DH.png" alt="DH-logo" />
      <div className="nav-content">
        <div className="nav-links">
          <Link to={routes.home}>
            <h4>Home</h4>
          </Link>
          <Link to={routes.contact}>
            <h4>Contact</h4>
          </Link>
          <Link to={routes.favs}>
            <h4>Favoritos</h4>
          </Link>
        </div>
        <button onClick={changeTheme} className={buttonClass} aria-label={themeAlt}>
          {themeIcon}
        </button>
      </div>
    </nav>
  );
};

export default Navbar