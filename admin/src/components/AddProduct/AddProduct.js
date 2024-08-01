import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../Assets/upload_area.svg";
const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const add_product = async () => {
    let resData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload/", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      
    .then((resp) => resp.json())
      .then((data) => {
        resData = data;
      });

    if (resData.success) {
      product.image = resData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct",{
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify(product)
      }).then((resp)=>resp.json()).then((data)=>{
        if(data.success){
          alert("Product added successfully")
        }
        else{
          alert("Failed")
        }
      })
    }
  };
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          onChange={changeHandler}
          value={productDetails.name}
          type="text"
          name="name"
          id=""
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            onChange={changeHandler}
            value={productDetails.old_price}
            type="text"
            name="old_price"
            id=""
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            onChange={changeHandler}
            value={productDetails.new_price}
            type="text"
            name="new_price"
            id=""
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-product-selector"
          id=""
        >
          <option value="women">women</option>
          <option value="men">men</option>
          <option value="kid">kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=""
            className="addproduct-thumbnail-img"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>

      <button onClick={add_product} className="addproduct-btn">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
