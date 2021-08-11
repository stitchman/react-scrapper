import Item from "./Item";
import classes from "./ItemList.module.css";

function ItemList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          brand={item.brand}
          price={item.price}
          description={item.description}
          images={item.images}
        />
      ))}
    </ul>
  );
}

export default ItemList;
