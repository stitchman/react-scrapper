import classes from "./ItemList.module.css";
import { Link } from "react-router-dom";

function ItemList(props) {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {props.items.map((item) => (
          <li key={item.id} className={classes.item}>
            <Link className={classes.link} to={"/shop/" + item.id}>
              <img
                className={classes.image}
                src={item.images[0]}
                alt={item.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
