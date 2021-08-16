import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const [isDown, setIsDown] = useState(false);

  const handleClick = () => {
    setIsDown(!isDown);
  };

  const handleClickLogo = () => {
    setIsDown(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink
          exact
          to="/"
          className={classes.logo}
          onClick={handleClickLogo}
        >
          <h1 className={classes.logoText}>스크래퍼</h1>
          {/* <img
            className={classes.logoImg}
            src="https://drive.google.com/uc?id=1F1GbVZ8zRRpIIQSzy_91Nl7COBFf63s9"
            alt="logo"
          ></img> */}
        </NavLink>
        <FaBars
          className={
            isDown ? `${classes.burger} ${classes.active}` : classes.burger
          }
          onClick={handleClick}
        />
      </div>
      <nav
        className={isDown ? classes.nav : `${classes.nav} ${classes.hidden}`}
      >
        <NavLink
          exact
          to="/"
          className={classes.link}
          activeClassName={classes.active}
          onClick={handleClick}
        >
          <li className={classes.navItem}>About</li>
        </NavLink>
        <NavLink
          to="/projects"
          className={classes.link}
          activeClassName={classes.active}
          onClick={handleClick}
        >
          <li className={classes.navItem}>Projects</li>
        </NavLink>
        <NavLink
          to="/shop"
          className={classes.link}
          activeClassName={classes.active}
          onClick={handleClick}
        >
          <li className={classes.navItem}>Shop</li>
        </NavLink>
      </nav>
      <div
        className={isDown ? classes.backdrop : classes.hidden}
        onClick={handleClick}
      />
    </header>
  );
}

export default MainNavigation;
