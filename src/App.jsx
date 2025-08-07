import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardLayout from "./DashboardLayout";
import LoginPage from "./components/LoginPage";
import DashboardHome from "./components/DashboardHome"; 
import UserList from "./components/UserList";
import Products from "./components/Products";
import Assignments from "./components/Assignments";
import Categories from "./components/Categories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} /> 
          <Route path="users" element={<UserList />} />
          <Route path="products" element={<Products />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
