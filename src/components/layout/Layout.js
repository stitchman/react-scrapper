import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import MainFooter from "./MainFooter";

function Layout(props) {
  return (
    <>
      <MainNavigation className={classes.header} />
      <main className={classes.main}>{props.children}</main>
      <MainFooter className={classes.footer} />
    </>
  );
}

export default Layout;
