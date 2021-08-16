import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Project from "../components/projects/Project";

function ProjectsDetailPage() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [loadedProject, setLoadedProject] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://scrapper-bec3a-default-rtdb.asia-southeast1.firebasedatabase.app/projects/${id}.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoadedProject(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <Project project={loadedProject} />
    </section>
  );
}

export default ProjectsDetailPage;
