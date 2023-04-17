import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  return (
    <AppContext.Provider value={{ selectedProductId, setSelectedProductId }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext
