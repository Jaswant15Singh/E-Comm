import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import "./Css/product.css"
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const{all_products}=useContext(ShopContext);
  const {productId}=useParams();
  const prodcut=all_products.find((e)=>e.id===Number(productId))
  return (
    <div className='product'>
       <Breadcrums product={prodcut}/>
       <ProductDisplay product={prodcut}/>
       <DescriptionBox/>
       <RelatedProducts/>
    </div>
  )
}

export default Product
