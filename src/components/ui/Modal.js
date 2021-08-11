import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <ul className={classes.list}>
          {props.images.map((image, index) => (
            <li>
              <img
                className={classes.image}
                key={index}
                src={image}
                alt={props.title}
              />
            </li>
          ))}
        </ul>
        <button onClick={props.onClick}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
