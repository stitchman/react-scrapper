import { useState } from "react";
import classes from "./Project.module.css";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";

const Project = (props) => {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  if (modal) {
    document.body.classList.add("modalIsOpen");
  } else {
    document.body.classList.remove("modalIsOpen");
  }

  return (
    <li className={classes.project}>
      <div className={classes.image}>
        <img src={props.images[0]} alt={props.title} onClick={toggleModal} />
      </div>
      <div className={classes.content}>
        <p>{props.title}</p>
      </div>
      {modal && (
        <Modal
          images={props.images}
          title={props.title}
          onClick={toggleModal}
        />
      )}
      {modal && <Backdrop onClick={toggleModal} />}
    </li>
  );
};

export default Project;
