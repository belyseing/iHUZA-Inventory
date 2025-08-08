import { useProduct } from '../hooks/useProduct';
import { useTheme } from '../context/ThemeContext';

 const Products = () => {
  const { products } = useProduct();
  const {theme} = useTheme ();

  const getStatusClasses = (status) => {
    switch (status.toLowerCase()) {
      case 'in stock':
        return 'text-green-700 bg-green-100';
      case 'out of stock':
        return 'text-red-900 bg-red-200';
      case 'low stock':
        return 'text-yellow-700 bg-yellow-100';
      default:
        return 'text-gray-500 bg-gray-100';
    }
  };

  return (
    <div className="p-6 ml-65">
      <div className={` mt-3 rounded-2xl border border-gray-100 ${theme === "light" ? "bg-white" : "bg-gray-800 border-gray-600"}`}>
        <h1 className={`text-xl font-medium border-b  p-6 ${theme === "light" ? "border-gray-200" : "border-gray-600"}`}>Recent Added Products</h1>
        <div className="grid grid-cols-3 gap-4 p-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-4 ${theme === "light"? "bg-white border border-gray-200" :"bg-gray-800 border border-gray-600"}`}
            >
              <div className="flex justify-between items-center">
                <p className={`font-medium  text-lg ${theme === "light"? "" : "text-white"}`}>{product.name}</p>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClasses(product.status)}`}
                >
                  {product.status}
                </span>
              </div>
              <div className="mt-3 space-y-1">
                <p className={` text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>{product.category}</p>
                <p className="text-gray-500 text-sm capitalize">{product.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
