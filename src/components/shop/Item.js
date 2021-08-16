import classes from "./Item.module.css";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className={classes.item}>
      <p className={classes.title}>{props.item.title}</p>
      <ul className={classes.list}>
        {/* <div className={classes.content}>
        <p className={classes.title}>{props.item.title}</p>
      </div> */}
        {props.item.images.map((image, index) => (
          <li key={index}>
            <img
              src={image}
              alt={`${props.item.title} ${index}`}
              className={classes.image}
            />
          </li>
        ))}
      </ul>
      <div className={classes.content}>
        <p className={classes.title}>{props.item.title}</p>
        <p>{props.item.brand}</p>
        <p>₩ {props.item.price}</p>
        <br />
        <p>{props.item.description}</p>
        <br />
        <br />
        <Link to="/shop" className={classes.link}>
          BACK
        </Link>
      </div>
    </div>
  );
}

export default Item;
