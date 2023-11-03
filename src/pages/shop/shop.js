import React from "react";
import { ProductList } from "../../products";
import { Product } from "./product";
import "./shop.css";


export const Shop = () => {
 

   return (
     <>
        

    
    <div className="shop">
      <div className="products">
        {ProductList.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
   
    </>
   )
  
};
  // const productNames = [
  // "Laptops",
  // "Bluetooth Headphones",
  // "Wired Earphones",
  // "Computer Keyboard and Mouse",
  // "Computers",
  // ];

 /* <ul className="list">
          {productNames.map((product, index) => (
            <a href={`#${product.toLowerCase().replace(" ", "-")}`} key={index}>
               <li>{product}</li>
             </a>
          ))}
       </ul> */