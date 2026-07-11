import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const selectContext = createContext("");
export const Context = ({ children }) => {
  const [selectedCategory, setCategory] = useState("all");
  const [selectedPrice, setPrice] = useState("all");
  const [selectedColor, setColor] = useState("all");
  const [selectedCompany, setCompany] = useState("all");
  return (
    <selectContext.Provider
      value={{
        selectedCategory,
        setCategory,
        selectedPrice,
        setPrice,
        selectedColor,
        setColor,
        selectedCompany,
        setCompany,
      }}
    >
      {children}
    </selectContext.Provider>
  );
};
