import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import SystemOverview from './components/SystemOverview';
import Categories from './components/Categories';
import { RecentProduct } from './components/Products';
import { ProductProvider } from './context/ProductContext';
import UserList from './components/UserList';
import { UserProvider } from './context/UserContext'; 


function App() {
  return (
    <ProductProvider>
      <UserProvider>
        <div>
          <div className="flex justify">
            <SideBar />
            <div className="flex-1">
              <Dashboard />
            </div>
          </div>

          <div className="bg-gray-50">
            <SystemOverview />
            <Categories />
            <RecentProduct />
            <UserList/>
          
          </div>
        </div>
      </UserProvider> 
    </ProductProvider>
  );
}

export default App;