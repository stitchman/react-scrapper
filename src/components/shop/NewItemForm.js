import Card from "../ui/Card";
import classes from "./NewItemForm.module.css";

function NewItemForm() {
  function submitHandler() {}

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Item Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="brand">Item Brand</label>
          <input type="text" required id="brand" />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Item Price</label>
          <input type="text" required id="price" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Item Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Item Description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Item</button>
        </div>
      </form>
    </Card>
  );
}

export default NewItemForm;
