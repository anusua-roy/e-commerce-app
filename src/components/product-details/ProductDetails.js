import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../../services/products.service";
import AddToCartButton from "../add-to-cart-btn/AddToCartButton";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const { productId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getProduct(productId);
    setProduct(res);
  };
  if (!product) {
    return <div className="text-center mt-8">Product not found</div>;
  }
  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-xl text-gray-500 mb-4">{`Rs. ${product.price}`}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">
                {"★".repeat(Math.floor(product.rating.rate))}
              </span>
              <span className="text-gray-400">
                {"★".repeat(5 - Math.floor(product.rating.rate))}
              </span>
              <span className="ml-2 text-gray-600">
                {product.rating.rate} / 5 ({product.rating.count} ratings)
              </span>
            </div>
            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Add to Cart
            </button> */}
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
