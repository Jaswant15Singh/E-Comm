import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../Assets/cross_icon.png";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    let data = await fetch("http://localhost:4000/getproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };
  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((item, i) => {
          return (
            <>
              <div
                key={i}
                className="listproduct-format-main listproduct-format"
              >
                <img
                  className="listproduct-product-icon"
                  src={cross_icon}
                  alt=""
                />
                <p>{item.name}</p>
                <p>${item.old_price}</p>
                <p>${item.new_price}</p>
                <p>{item.category}</p>
                <img
                  onClick={() => {
                    removeProduct(item.id);
                  }}
                  className="listproduct-remove-icon"
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
