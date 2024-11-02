import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Spin, message } from "antd";
import { doc, getDoc } from "firebase/firestore"; 
import { db } from "../../firebase/config"; 
import { toast } from "react-toastify"; 

const SingleProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isSpin, setIsSpin] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsSpin(true);
      try {
        const productRef = doc(db, "products", productId);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setSingleProduct(productSnap.data());
        } else {
          message.error("Product not found");
          navigate("/all-products");
        }
      } catch (error) {
        console.error("Error fetching the product:", error);
        message.error("Failed to fetch product data");
      } finally {
        setIsSpin(false);
      }
    };

    fetchProduct();
  }, [productId, navigate]);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success(`Product ${product.name} has been added to your cart.`);
  };

  if (isSpin || !singleProduct) {
    return (
      <div className="spinner-overlay">
        <Spin tip="Loading..." size="large" />
      </div>
    );
  }

  return (
    <main>
      <div className="super_container">
        <div className="single_product container my-5 p-4 rounded shadow">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6 mb-4">
              <div className="image_selected">
                <img
                  src={singleProduct.image}
                  alt={singleProduct.title || "Product Image"}
                  className="img-fluid rounded"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-6" style={{ paddingLeft: "30px" }}>
              <div className="product_description">
                <nav>
                  <ol className="breadcrumb breadcrumb-black">   
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/shop">Shop</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      {singleProduct.brand}
                    </li>
                  </ol>
                </nav>
                <h2 className="product_name">{singleProduct.name}</h2> 
                <h4 className="product_price">${singleProduct.price}</h4>
                <hr />
                <p className="product_info">
                  {singleProduct.description?.substring(0,50) || "No description available."}
                </p>
                <div className="row">
                  <div className="col-md-5">
                    <div className="br-dashed">
                      <div className="row">
                        <div className="col-md-3 col-xs-3">
                          <img
                            src="https://img.icons8.com/color/48/000000/price-tag.png"
                            alt="Price Tag"
                          />
                        </div>
                        <div className="col-md-9 col-xs-9">
                          <div className="pr-info">
                            <span className="break-all">
                              Get 5% instant discount + 10X rewards @ RENTOPC
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7"></div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <p><strong>Warranty:</strong> {singleProduct.warrantyInformation || "1 year warranty"}</p>
                    <p><strong>Shipping Info:</strong> {singleProduct.shippingInformation || "Ships in 2 weeks"}</p>
                    <p><strong>Status:</strong> {singleProduct.availabilityStatus || "In Stock"}</p>
                  </div>
                </div>
                <hr />
                <div className="addToCart d-flex justify-content-between align-items-center">
                  <button className="btn btn-success" onClick={() => handleAddToCart(singleProduct)}>
                    Add To Cart
                  </button> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
