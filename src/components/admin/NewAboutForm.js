import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./admin.module.css";

const NewAboutForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;

    const aboutData = {
      title: enteredTitle,
      image: enteredImage,
    };

    props.onAddAbout(aboutData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={classes.actions}>
          <button>Add About</button>
        </div>
      </form>
    </Card>
  );
};

export default NewAboutForm;
