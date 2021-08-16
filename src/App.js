import { Route, Switch } from "react-router-dom";

import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ProjectsDetailPage from "./pages/ProjectsDetail";
import ShopPage from "./pages/Shop";
import ShopDetailPage from "./pages/ShopDetail";
import AdminPage from "./pages/Admin";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AboutPage />
        </Route>
        <Route path="/projects" exact>
          <ProjectsPage />
        </Route>
        <Route path="/projects/:id">
          <ProjectsDetailPage />
        </Route>
        <Route path="/shop" exact>
          <ShopPage />
        </Route>
        <Route path="/shop/:id">
          <ShopDetailPage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
