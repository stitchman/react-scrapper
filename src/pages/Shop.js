import ItemList from "../components/shop/ItemList.js";

const DUMMY_DATA = [
  {
    id: "item1",
    title: "first title",
    brand: "first brand",
    price: 20000,
    image:
      "https://ww.namu.la/s/7ba432b762c1caf98b7f1032e5b6fb31c64ab6b8918200ee0f47d1cd1c1a0b0817b55f209bfdb33e9638cb0f4f4b23a563b84d0e0ceb358c1e6b97a0766561dd0a9469f407233c17ada951c3076e9d03991d1ae20e7e22dc8194fb313e7c1ceb",
    description: "first desc",
  },
  {
    id: "item2",
    title: "second title",
    brand: "second brand",
    price: 30000,
    image:
      "https://w.namu.la/s/113065f82ba3f46c3d32229f4f0227cc9b3564856643d7b6ddd04e98932d83fdc8838244c1bb3fe74793f8ddb3fb7787c6b15014e21290cdb85e0039e61657bf33f52c3a862cc86857183fe4040c6fac058959b2baf8333f0e7f287337246e8c44582e7a65861dd851ba2c5b113dba47",
    description: "seconddesc",
  },
  {
    id: "item3",
    title: "second title",
    brand: "second brand",
    price: 30000,
    image:
      "https://w.namu.la/s/113065f82ba3f46c3d32229f4f0227cc9b3564856643d7b6ddd04e98932d83fdc8838244c1bb3fe74793f8ddb3fb7787c6b15014e21290cdb85e0039e61657bf33f52c3a862cc86857183fe4040c6fac058959b2baf8333f0e7f287337246e8c44582e7a65861dd851ba2c5b113dba47",
    description: "seconddesc",
  },
  {
    id: "item4",
    title: "second title",
    brand: "second brand",
    price: 30000,
    image:
      "https://w.namu.la/s/113065f82ba3f46c3d32229f4f0227cc9b3564856643d7b6ddd04e98932d83fdc8838244c1bb3fe74793f8ddb3fb7787c6b15014e21290cdb85e0039e61657bf33f52c3a862cc86857183fe4040c6fac058959b2baf8333f0e7f287337246e8c44582e7a65861dd851ba2c5b113dba47",
    description: "seconddesc",
  },
  {
    id: "item5",
    title: "first title",
    brand: "first brand",
    price: 20000,
    image:
      "https://ww.namu.la/s/7ba432b762c1caf98b7f1032e5b6fb31c64ab6b8918200ee0f47d1cd1c1a0b0817b55f209bfdb33e9638cb0f4f4b23a563b84d0e0ceb358c1e6b97a0766561dd0a9469f407233c17ada951c3076e9d03991d1ae20e7e22dc8194fb313e7c1ceb",
    description: "first desc",
  },
  {
    id: "item6",
    title: "second title",
    brand: "second brand",
    price: 30000,
    image:
      "https://w.namu.la/s/113065f82ba3f46c3d32229f4f0227cc9b3564856643d7b6ddd04e98932d83fdc8838244c1bb3fe74793f8ddb3fb7787c6b15014e21290cdb85e0039e61657bf33f52c3a862cc86857183fe4040c6fac058959b2baf8333f0e7f287337246e8c44582e7a65861dd851ba2c5b113dba47",
    description: "seconddesc",
  },
  {
    id: "item7",
    title: "second title",
    brand: "second brand",
    price: 30000,
    image:
      "https://w.namu.la/s/113065f82ba3f46c3d32229f4f0227cc9b3564856643d7b6ddd04e98932d83fdc8838244c1bb3fe74793f8ddb3fb7787c6b15014e21290cdb85e0039e61657bf33f52c3a862cc86857183fe4040c6fac058959b2baf8333f0e7f287337246e8c44582e7a65861dd851ba2c5b113dba47",
    description: "seconddesc",
  },
  {
    id: "item8",
    title: "second title",
    brand: "second brand",
    price: 30000,
    image:
      "https://w.namu.la/s/113065f82ba3f46c3d32229f4f0227cc9b3564856643d7b6ddd04e98932d83fdc8838244c1bb3fe74793f8ddb3fb7787c6b15014e21290cdb85e0039e61657bf33f52c3a862cc86857183fe4040c6fac058959b2baf8333f0e7f287337246e8c44582e7a65861dd851ba2c5b113dba47",
    description: "seconddesc",
  },
];

function ShopPage() {
  return (
    <section>
      <ItemList items={DUMMY_DATA} />
    </section>
  );
}

export default ShopPage;
