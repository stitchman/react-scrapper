import classes from "./FlexList.module.css";

const FlexList = (props) => {
  return <ul className={classes.list}>{props.children}</ul>;
};

export default FlexList;
