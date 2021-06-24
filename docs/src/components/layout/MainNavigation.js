//when utilizing a href as links you will submit another request - don't use this.
// use link from react-router --- this will generate a component that prevents the default href link from submitting a request, and instead modifies the url in the browser and shows the correct component/s

import { Link } from "react-router-dom";
import { useContext } from 'react'

//import _____ name it whatever you want - from the css module file
//what we import (classes here) will be a JS object where all the CSS classes defined in the module.css file will be properties of *classes*
//styles are scoped by component 

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
  <header className={classes.header}>
    <div className={classes.logo}>React Meetups</div>
    <nav>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">Add New Meetup</Link>
        </li>
        <li>
          <Link to="/favorites">My Favorites
          <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default MainNavigation;
