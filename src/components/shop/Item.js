import { useState } from "react";
import Card from "../ui/Card";
import classes from "./Item.module.css";
import Modal from "../ui/Modal";
import Backdrop from "../ui/Backdrop";

function Item(props) {
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
    <Card>
      <div className={classes.item}>
        <div>
          <img
            className={classes.image}
            src={props.images[0]}
            alt={props.title}
            onClick={toggleModal}
          />
        </div>
        {/* <div className={classes.content}>
          <span>{props.title}</span>
          <span>{props.brand}</span>
          <span>{props.price}</span>
          <p>{props.description}</p>
        </div> */}
      </div>
      {modal && (
        <Modal
          images={props.images}
          title={props.title}
          description={props.description}
          onClick={toggleModal}
        />
      )}
      {modal && <Backdrop onClick={toggleModal} />}
    </Card>
  );
}

export default Item;
