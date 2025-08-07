import { useProduct } from '../hooks/useProduct';

 const Products = () => {
  const { products } = useProduct();

  const getStatusClasses = (status) => {
    switch (status.toLowerCase()) {
      case 'in stock':
        return 'text-green-700 bg-green-100';
      case 'out of stock':
        return 'text-red-700 bg-red-100';
      case 'low stock':
        return 'text-yellow-700 bg-yellow-100';
      default:
        return 'text-gray-500 bg-gray-100';
    }
  };

  return (
    <div className="p-6 ml-65">
      <div className="bg-white mt-3 rounded-2xl border border-gray-100">
        <h1 className="text-xl font-medium border-b border-gray-200 p-6">Recent Added Products</h1>
        <div className="grid grid-cols-3 gap-4 p-6">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl p-4 "
            >
              <div className="flex justify-between items-center">
                <p className="font-medium  text-lg">{product.name}</p>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClasses(product.status)}`}
                >
                  {product.status}
                </span>
              </div>
              <div className="mt-3 space-y-1">
                <p className='text-gray-500 text-sm'>{product.category}</p>
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
