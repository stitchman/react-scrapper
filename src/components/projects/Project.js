import classes from "./Project.module.css";
import { Link } from "react-router-dom";

function Project(props) {
  return (
    <div className={classes.project}>
      <p className={classes.title}>{props.project.title}</p>
      <br />
      <ul className={classes.list}>
        {/* <div className={classes.content}>
          <p className={classes.title}>{props.item.title}</p>
           </div> */}
        {props.project.images.map((image, index) => (
          <li key={index}>
            <img src={image} alt={`${props.project.title} ${index}`} />
          </li>
        ))}
      </ul>
      <div className={classes.content}>
        <div className={classes.center}>
          <p className={classes.title}>{props.project.title}</p>
          <br />
          <p>{props.project.description}</p>
          <br />
          <br />
          <Link to="/projects" className={classes.link}>
            BACK
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
