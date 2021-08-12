import { useState, useRef } from "react";

import Card from "../ui/Card";
import classes from "./admin.module.css";

const NewProjectForm = (props) => {
  const titleInputRef = useRef();
  const numberInputRef = useRef();
  const descriptionInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredNumber = numberInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const projectData = {
      title: enteredTitle,
      number: enteredNumber,
      description: enteredDescription,
      images: images,
    };

    props.onAddProject(projectData);
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
          <label htmlFor="number">number</label>
          <input type="text" required id="number" ref={numberInputRef} />
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
          <button>Add Project</button>
        </div>
      </form>
    </Card>
  );
};

export default NewProjectForm;
