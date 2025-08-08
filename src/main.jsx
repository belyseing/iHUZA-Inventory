
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import { UserProvider } from './context/UserContext.jsx';  
import { LoginProvider } from './context/LoginContext.jsx';
import { ProductProvider } from './context/ProductContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <UserProvider> 
      <LoginProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </LoginProvider>
    </UserProvider>
    </ThemeProvider>
  </StrictMode>
);
