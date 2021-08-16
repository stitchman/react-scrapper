import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/shop/Item";

function ShopDetailPage() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [loadedItem, setLoadedItem] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://scrapper-bec3a-default-rtdb.asia-southeast1.firebasedatabase.app/items/${id}.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoadedItem(data);
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
      <Item item={loadedItem} />
    </section>
  );
}

export default ShopDetailPage;
