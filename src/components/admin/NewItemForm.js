import { useState, useRef } from "react";

import Card from "../ui/Card";
import classes from "./admin.module.css";

const NewItemForm = (props) => {
  const titleInputRef = useRef();
  const brandInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredBrand = brandInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const itemData = {
      title: enteredTitle,
      brand: enteredBrand,
      price: enteredPrice,
      description: enteredDescription,
      images: images,
    };

    props.onAddItem(itemData);
  };

  const [images, setImages] = useState([""]);

  const handleChange = (index, event) => {
    const values = [...images];
    values[index] = event.target.value;
    setImages(values);
  };

  const handleAddImage = () => {
    setImages([...images, ""]);
  };

  const handleRemoveImage = (index) => {
    const values = [...images];
    if (values.length - 1) {
      values.splice(index, 1);
    }
    setImages(values);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="brand">brand</label>
          <input type="text" required id="brand" ref={brandInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="price">price</label>
          <input type="text" required id="price" ref={priceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <ul>
          {images.map((image, index) => (
            <li key={index} className={classes.control}>
              <label htmlFor={`image-${index}`}>image-{index}</label>
              <input
                type="url"
                id={`image-${index}`}
                required
                onChange={(event) => handleChange(index, event)}
              />
              <button type="button" onClick={handleAddImage}>
                add
              </button>
              <button type="button" onClick={() => handleRemoveImage(index)}>
                remove
              </button>
            </li>
          ))}
        </ul>

        <div className={classes.actions}>
          <button>Add Item</button>
        </div>
      </form>
    </Card>
  );
};

export default NewItemForm;
