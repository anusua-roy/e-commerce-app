import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./components/products-list/ProductsList";
import NavBar from "./components/nav-bar/NavBar";
import Cart from "./components/cart/Cart";
import PageNotFound from "./components/page-not-found/PageNotFound";
import ProductDetails from "./components/product-details/ProductDetails";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

function App() {
  const [cartItems, setcartItems] = useState();
  const [countCart, setCountCart] = useState();

  useEffect(() => {
    totalCount();
  }, [cartItems]);

  const addToCart = (product) => {
    if (cartItems && Object.keys(cartItems).includes(String(product.id))) {
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
      setcartItems({
        ...cartItems,
        [product.id]: {
          ...product,
          count: 1,
        },
      });
    } else {
      setcartItems({
        [product.id]: {
          ...product,
          count: 1,
        },
      });
    }
  };

  const deleteFromCart = (product) => {
    if (cartItems && Object.keys(cartItems).includes(String(product.id))) {
      const temp = { ...cartItems };
      delete temp[product.id];
      setcartItems({ ...temp });
    }
  };

  const handleDecrease = (product) => {
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
        }}
      >
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
