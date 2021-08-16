import classes from "./MainFooter.module.css";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function MainFooter() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <footer
      className={
        isActive ? `${classes.footer} ${classes.active}` : classes.footer
      }
    >
      <div className={classes.bar} onClick={handleClick}>
        <FaAngleUp
          className={
            isActive ? `${classes.arrow} ${classes.active}` : classes.arrow
          }
        />
      </div>
      <div
        className={
          isActive ? classes.contact : `${classes.contact} ${classes.hidden}`
        }
      >
        <div className={classes.left}>
          <p>스크래퍼</p>
          <p>0507-1342-9404</p>
          <p>서울 용산구 백범로90라길 45 3층</p>
        </div>
        <div className={classes.right}>
          <p>ploggingman@gmail.com</p>
          <p>https://ploggingman.tistory.com</p>
          <p>https://smartstore.naver.com/scrapper_store</p>
        </div>
      </div>
      <div
        className={isActive ? classes.backdrop : classes.hidden}
        onClick={handleClick}
      />
    </footer>
  );
}

export default MainFooter;
