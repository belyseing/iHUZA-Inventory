import  { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'MacBook Pro 16',
      date: 'dec 10,2024',
      category: 'Laptop',
      stock: 20,
      status:'in stock'
    },
    {
      id: 2,
      name: 'Dell XPS 13',
      date: 'dec 9,2024',
      category: 'Laptop',
      stock: 0,
      status:'in stock'
    },
    {
      id: 3,
      name: 'iPhone 15 Pro',
      date: 'dec 8,2024',
      category: 'Mobile',
      stock: 3,
      status:'low stock'
    },
    {
      id: 4,
      name: 'iPad Air',
      date: 'dec 7,2024',
      category: 'Tablets',
      stock: 8,
      status:'in stock'
    },
    {
      id: 4,
      name: 'Surface Pro 9',
      date: 'dec 7,2024',
      category: 'Tablets',
      stock: 8,
      status:'out of stock'
    }
  ]);

  return (
    <div>
   <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
    </div>
   
  );
};
