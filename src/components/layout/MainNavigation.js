import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>스크래퍼♻️</h1>
      <nav className={classes.nav}>
        <li>
          <NavLink exact to="/" activeClassName={classes.active}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="projects" activeClassName={classes.active}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink exact to="shop" activeClassName={classes.active}>
            Shop
          </NavLink>
        </li>
      </nav>
    </header>
  );
}

export default MainNavigation;
