import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  // Shopping Cart - Count
  const [count, setCount] = useState(0);

  // Product Detail - Open and close product detail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  // Product Detail - Show product detail
  const [productToShow, setProductToShow] = useState({});

  return (
    <Context.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </Context.Provider>
  );
};
