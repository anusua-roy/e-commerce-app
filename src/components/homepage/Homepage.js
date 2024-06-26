import React, { useState, useEffect, useContext } from "react";
import AddToCartButton from "../add-to-cart-btn/AddToCartButton";
import { getAllProducts } from "../../services/products.service";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { setIsLoading } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const res = await getAllProducts();
    setProducts(res);
    setIsLoading(false);
  };

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {category
              .split(" ")
              .map((word) => word[0].toUpperCase() + word.substring(1))
              .join(" ")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products
              .filter((product) => product.category === category)
              .map((product) => {
                return (
                  <div
                    key={product.id}
                    className="flex flex-col bg-white p-4 rounded-lg shadow-md h-80"
                  >
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md mb-4">
                      <Link to={`/products/${product.id}`}>
                        <img
                          className="object-contain w-full h-full"
                          src={product.image}
                          alt={product.title}
                        />
                      </Link>
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <h2 className="text-xl font-semibold truncate overflow-ellipsis">
                        {product.title}
                      </h2>
                      <p className="text-gray-500">{`Rs. ${product.price}`}</p>
                      <AddToCartButton product={product} isListPage />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
