import { Route, Switch } from "react-router-dom";

import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ShopPage from "./pages/Shop";
import AdminPage from "./pages/Admin";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AboutPage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
