import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";

const FeaturedProducts = ({addToCart}) => {  
  const [popularProducts, setPopularProducts] = useState([]);
  return (
    <main className="text-center mb-5">
      <h1 className="text-dark mb-5 mt-5">Featured Product</h1>
      <div className="container">

      <div className="row text-center mt-3">
        <div className="col-lg-3 mt-2 mb-3">
          <img
            src="https://utero-ninethemes.myshopify.com/cdn/shop/files/collection-1_360x.jpg?v=1729685453"
            alt="Logo"
            style={{ height: "200px" }}
          />
          <h5 className="text-dark mt-3">Clothes</h5>
          {/* <Link to="/products" className="btn btn-primary mt-3">
            Shop Now
          </Link> */}

        </div>

        <div className="col-lg-3 mt-2 mb-3">
          <img
            src="https://utero-ninethemes.myshopify.com/cdn/shop/files/collection-2_360x.jpg?v=1729685468"
            alt="Logo"
            style={{ height: "200px" }}
          />
          <h5 className="text-dark mt-3">Shoes</h5>
         
        </div>

        <div className="col-lg-3 mt-2 mb-3">
          <img
            src="https://utero-ninethemes.myshopify.com/cdn/shop/files/collection-4_360x.jpg?v=1729685498"
            alt="Logo"
            style={{ height: "200px" }}
          />
          <h5 className="text-dark mt-2">Grooming</h5>

        </div>

        <div className="col-lg-3 mt-2 mb-3">
          <img
            src="https://utero-ninethemes.myshopify.com/cdn/shop/files/collection-5_360x.jpg?v=1729685511"
            alt="Logo"
            style={{ height: "200px" }}
          />
          <h5 className="text-dark mt-2">Acessories</h5>

        </div>
      </div>

      </div>
      <div className="button">
        <Link to="#">
        <button className="btn btn-danger btn1">View More</button>
        </Link>
      </div>
    </main>
  );
};

export default FeaturedProducts;