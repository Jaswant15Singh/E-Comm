import React from "react";
import "./relatedproducts.css";
import data_products from "../Assets/data";
import Items from "../../Components/Items/Items";

const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
      <h1>RELATED PRODUCTS</h1>
      <hr />
      <div className="relatedproducts-items">
        {data_products.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
