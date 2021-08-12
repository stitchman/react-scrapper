import { useState } from "react";

import classes from "./Modal.module.css";
import { FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa";

function Modal(props) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? props.images.length : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === props.images.length ? 0 : current + 1);
  };

  const textIndex = props.images.length;

  console.log(current);

  return (
    <div className={classes.modal}>
      <FaAngleLeft className={classes.leftArrow} onClick={prevSlide} />
      <FaAngleRight className={classes.rightArrow} onClick={nextSlide} />
      <FaTimes className={classes.close} onClick={props.onClick} />
      <ul className={classes.list}>
        {props.images.map((image, index) => (
          <li
            key={index}
            className={
              index === current
                ? `${classes.content} ${classes.active}`
                : classes.content
            }
          >
            {index === current && (
              <img className={classes.image} src={image} alt={props.title} />
            )}
          </li>
        ))}
        <li
          key={textIndex}
          className={
            textIndex === current
              ? `${classes.content} ${classes.active}`
              : classes.content
          }
        >
          {textIndex === current && (
            <>
              <p>{props.title}</p>
              <p>{props.description}</p>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Modal;
