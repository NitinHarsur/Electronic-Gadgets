import React from "react";
import { ProductList } from "../../products";
import { Product } from "./product";
import "./shop.css";


export const Shop = () => {
 
  const productNames = [
  "Laptops",
  "Bluetooth Headphones",
  "Wired Earphones",
  "Computer Keyboard and Mouse",
  "Computers",
  ];

   return (
     <>
        <div className="productlist">
        <ul className="list">
          {productNames.map((product, index) => (
            <a href={`#${product.toLowerCase().replace(" ", "-")}`} key={index}>
               <li>{product}</li>
             </a>
          ))}
       </ul>
      </div>  

    <div className="shop">
      <div className="shopTitle">
        <h1>ELECTRONIC GADGETS</h1>
      </div>

      <div className="products">
        {ProductList.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
   
    </>
   )
  
};
