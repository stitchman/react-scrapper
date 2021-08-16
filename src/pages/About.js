import { useState, useEffect } from "react";
import AboutList from "../components/about/AboutList";
import Canvas from "../components/canvas/Canvas";

function AboutPage() {
  const [loading, setLoading] = useState(true);
  const [loadedAbouts, setLoadedAbouts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://scrapper-bec3a-default-rtdb.asia-southeast1.firebasedatabase.app/abouts.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const abouts = [];

        for (const key in data) {
          const about = {
            id: key,
            ...data[key],
          };

          abouts.push(about);
        }

        setLoadedAbouts(abouts);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      {!loading && <AboutList abouts={loadedAbouts} />}
      <Canvas />
    </section>
  );
}

export default AboutPage;
