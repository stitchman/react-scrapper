import classes from "./ProjectList.module.css";
import { Link } from "react-router-dom";

const ProjectList = (props) => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {props.projects.reverse().map((project) => (
          <li key={project.id} className={classes.project}>
            <div className={classes.thumb}>
              {/* <Link className={classes.link} to={"/projects/" + project.id}>
                <img
                  className={classes.image}
                  src={project.images[0]}
                  alt={project.title}
                />
              </Link> */}
            </div>
            <div className={classes.content}>
              <span className={classes.number}>{`#${project.number}`}</span>
              <Link className={classes.link} to={"/projects/" + project.id}>
                <p className={classes.title}>{project.title}</p>
              </Link>
              <p className={classes.date}>{project.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
