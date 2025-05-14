import { createContext, useContext, useState } from 'react';

const InventoryContext = createContext();

export const useInventory = () => useContext(InventoryContext);

export const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems(prev => [...prev, item]);
  };

  const removeItem = (item) => {
    setItems(prev => prev.filter(i => i !== item));
  };

  return (
    <InventoryContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </InventoryContext.Provider>
  );
};