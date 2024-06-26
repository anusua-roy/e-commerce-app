import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/products.service";
import { Link } from "react-router-dom";
import AddToCartButton from "../add-to-cart-btn/AddToCartButton";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getAllProducts();
    setProducts(res);
  };

  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Products Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-col bg-white p-4 rounded-lg shadow-md h-80"
            >
              
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md mb-4">
                  <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain w-full h-full"
                  /></Link>
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
  );
};

export default ProductsList;
