import React, { useEffect, useState } from "react";

const Bannerproduct = () => {
  const [data, setData] = useState([]);

  // Fetching the data
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch the data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {data.map((item) => (
          <div key={item.id} className="flex items-center">
            <p>{item.title}</p>
            <div>
              <img
                src={item.image}
                alt="productimg"
                style={{ width: "150px" }}
              />

              <p>Price: ${item.price}</p>
              <p>Rating: {item.rating.rate} / 5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bannerproduct;
