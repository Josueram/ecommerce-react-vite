import React, { useState, useEffect } from "react";

// Components
import Card from "../../Components/Card";
import ProductDatail from "../../Components/ProductDetail";

// API
const apiUrl = "https://fakestoreapi.com";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="grid gap-6 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDatail />
    </>
  );
}

export default Home;
