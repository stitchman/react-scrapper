import { useHistory } from "react-router-dom";
import NewItemForm from "../components/admin/NewItemForm";
import NewProjectForm from "../components/admin/NewProjectForm";
import Card from "../components/ui/Card";

const AdminPage = () => {
  const history = useHistory();

  const handleAddProject = (projectData) => {
    fetch(
      "https://scrapper-bec3a-default-rtdb.asia-southeast1.firebasedatabase.app/projects.json",
      {
        method: "POST",
        body: JSON.stringify(projectData),
        hearders: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/projects");
    });
  };

  const handleAddItem = (itemData) => {
    fetch(
      "https://scrapper-bec3a-default-rtdb.asia-southeast1.firebasedatabase.app/items.json",
      {
        method: "POST",
        body: JSON.stringify(itemData),
        hearders: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/shop");
    });
  };

  return (
    <section>
      <Card>
        <h1>프로젝트 추가</h1>
        <NewProjectForm onAddProject={handleAddProject} />
      </Card>
      <Card>
        <h1>아이템 추가</h1>
        <NewItemForm onAddItem={handleAddItem} />
      </Card>
    </section>
  );
};

export default AdminPage;
