import { useState, useEffect } from "react";

import ItemList from "../components/shop/ItemList.js";

function ShopPage() {
  const [loading, setLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://scrapper-bec3a-default-rtdb.asia-southeast1.firebasedatabase.app/items.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const items = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key],
          };

          items.push(item);
        }

        setLoading(false);
        setLoadedItems(items);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return <ItemList items={loadedItems} />;
}

export default ShopPage;
