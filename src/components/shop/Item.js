import Card from "../ui/Card";
import classes from "./Item.module.css";

function Item(props) {
  return (
    <Card>
      <div className={classes.item}>
        <div>
          <img className={classes.image} src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <span>{props.brand}</span>
          <span>{props.price}</span>
          <p>{props.description}</p>
        </div>
      </div>
    </Card>
  );
}

export default Item;
