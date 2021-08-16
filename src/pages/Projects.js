import { useState, useEffect } from "react";

import ProjectList from "../components/projects/ProjectList.js";

function ProjectsPage() {
  const [loading, setLoading] = useState(true);
  const [loadedProjects, setLoadedProjects] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://scrapper-bec3a-default-rtdb.asia-southeast1.firebasedatabase.app/projects.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const projects = [];

        for (const key in data) {
          const project = {
            id: key,
            ...data[key],
          };

          projects.push(project);
        }

        setLoading(false);
        setLoadedProjects(projects);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return <ProjectList projects={loadedProjects} />;
}

export default ProjectsPage;
