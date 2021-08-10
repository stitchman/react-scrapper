import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import MainFooter from "./MainFooter";

function Layout(props) {
  return (
    <div className={classes.wrapper}>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <MainFooter />
    </div>
  );
}

export default Layout;
