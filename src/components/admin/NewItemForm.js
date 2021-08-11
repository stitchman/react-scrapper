import { useState, useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewItemForm.module.css";

const NewItemForm = () => {
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

    console.log(itemData);
  };

  const [images, setImages] = useState([
    {
      id: "image-0",
      url: "",
    },
  ]);

  const handleChange = (index, event) => {
    const values = [...images];
    values[index].url = event.target.value;
    setImages(values);
  };

  const handleAddImage = () => {
    setImages([...images, { id: `image-${images.length}`, url: "" }]);
  };

  const handleRemoveImage = (index) => {
    const values = [...images];
    values.splice(index, 1);
    values.forEach((image, index) => {
      image.id = `image-${index}`;
    });
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

        {images.map((image, index) => (
          <div className={classes.control}>
            <label htmlFor={image.id}>{image.id}</label>
            <input
              type="text"
              id={image.id}
              required
              onChange={(event) => handleChange(index, event)}
            />
            <button type="button" onClick={handleAddImage}>
              add
            </button>
            <button type="button" onClick={() => handleRemoveImage(index)}>
              remove
            </button>
          </div>
        ))}

        <div className={classes.actions}>
          <button>Add Item</button>
        </div>
      </form>
    </Card>
  );
};

export default NewItemForm;
