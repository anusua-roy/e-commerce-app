import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./components/products-list/ProductsList";
import NavBar from "./components/nav-bar/NavBar";
import Cart from "./components/cart/Cart";
import PageNotFound from "./components/page-not-found/PageNotFound";
import ProductDetails from "./components/product-details/ProductDetails";
import { createContext, useEffect, useState } from "react";
import Toast from "./components/toast/Toast";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading";

export const AppContext = createContext();

function App() {
  const [cartItems, setcartItems] = useState();
  const [countCart, setCountCart] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "info",
  });

  useEffect(() => {
    totalCount();
  }, [cartItems]);

  const showToast = (message, type) => {
    setToast({ isVisible: true, message, type });
    setTimeout(() => setToast({ isVisible: false, message: "", type }), 2000);
  };

  const addToCart = (product) => {
    setIsLoading(true);
    if (cartItems && Object.keys(cartItems).includes(String(product.id))) {
      showToast("Increased quantity of existing item", "info");
      setcartItems({
        ...cartItems,
        [product.id]: {
          ...cartItems[product.id],
          count: cartItems[product.id].count + 1,
        },
      });
    } else if (
      cartItems &&
      !Object.keys(cartItems).includes(String(product.id))
    ) {
      showToast("Added to cart", "success");
      setcartItems({
        ...cartItems,
        [product.id]: {
          ...product,
          count: 1,
        },
      });
    } else {
      showToast("Added to cart", "success");
      setcartItems({
        [product.id]: {
          ...product,
          count: 1,
        },
      });
    }
    setIsLoading(false);
  };

  const deleteFromCart = (product) => {
    setIsLoading(true);
    if (cartItems && Object.keys(cartItems).includes(String(product.id))) {
      const temp = { ...cartItems };
      delete temp[product.id];
      setcartItems({ ...temp });
    }
    showToast("Removed item from cart", "error");
    setIsLoading(false);
  };

  const handleDecrease = (product) => {
    setIsLoading(true);
    if (
      cartItems &&
      Object.keys(cartItems).includes(String(product.id)) &&
      cartItems[product.id].count === 1
    ) {
      const temp = { ...cartItems };
      delete temp[product.id];
      setcartItems({ ...temp });
    } else {
      setcartItems({
        ...cartItems,
        [product.id]: {
          ...product,
          count: cartItems[product.id].count - 1,
        },
      });
    }
    setIsLoading(false);
    showToast("Decreased item quantity", "warning");
  };

  const totalCount = () => {
    const res = Object.values(cartItems ?? []).reduce(
      (sum, item) => sum + item.count,
      0
    );
    setCountCart(res);
  };

  return (
    <Router>
      <AppContext.Provider
        value={{
          cartItems,
          setcartItems,
          countCart,
          setCountCart,
          addToCart,
          deleteFromCart,
          handleDecrease,
          setIsLoading,
        }}
      >
        <div className="flex flex-col min-h-screen">
          {isLoading && <Loading />}

          <NavBar />
          <Toast
            message={toast.message}
            type={toast.type}
            isVisible={toast.isVisible}
            onClose={() =>
              setToast({ isVisible: false, message: "", type: "info" })
            }
          />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<ProductsList />} />
              <Route path="/products" element={<ProductsList />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
