import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>스크래퍼😎</h1>
      <nav className={classes.nav}>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="projects">Projects</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
      </nav>
    </header>
  );
}

export default MainNavigation;
