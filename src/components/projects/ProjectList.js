import classes from "./ProjectList.module.css";
import Project from "./Project";

const ProjectList = (props) => {
  return (
    <ul className={classes.list}>
      {props.projects.map((project) => (
        <Project
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          images={project.images}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
