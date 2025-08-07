import { useUser } from '../hooks/useUser';
import { FiUser } from "react-icons/fi";

const UserList = () => {
  const { User } = useUser();

  const getRoleClasses = (role) => {
    switch (role) {
      case 'admin': 
        return 'text-purple-600 bg-purple-600/10 rounded-full';
      case 'manager': 
        return 'text-blue-800 bg-blue-400/10 rounded-full';
      case 'staff': 
        return 'text-black bg-gray-400/20 rounded-full'; 
      default: 
        return 'text-gray-500 bg-gray-300/30 rounded-full';
    }
  };

  const getStatusClasses = (status) => {
    return status === 'active' 
      ? 'text-green-600 bg-green-500/10 rounded-full'
      : 'text-red-800 bg-red-600/20 rounded-full';
  };

  return (
    <div className="bg-white text-black ml-72 rounded-2xl border border-gray-100 mr-6">
      <div>
        <div className='flex justify-between'>
          <h2 className='p-4 font-bold text-xl'>Users</h2>
          <button className='m-4 px-4 py-2 bg-primary-400 rounded-md text-white font-light'>Add User</button>
        </div>
        <table className='w-full table-wrapper rounded-md'>
          <thead> 
            <tr className='bg-gray-300/20 text-left text-gray-500 text-sm uppercase'>
              <th className='w-20 p-5 pl-8'>User</th>
              <th className='w-20 pl-2'>Role</th>
              <th className='w-20'>Status</th>
              <th className='w-20'>Last Login</th>
              <th className='w-20 pl-2'>Actions</th>
            </tr>
          </thead>
          <tbody className='divide-y'>
            {User.map((user, index) => (
              <tr key={index} className="text-left border-b border-gray-600/20">
                <td className='flex items-center justify-start gap-2 p-3 whitespace-nowrap'>
                  <div className='size-10 bg-neutral-200 rounded-full flex items-center justify-center'>
                    < FiUser className="text-gray-600 text-xl" />
                  </div>
                  <span className='flex flex-col gap-2 items-start'>
                    <h2 className='font-bold capitalize px-2'>{user.username}</h2>
                    <h2 className='text-sm text-gray-500 px-2'>{user.email}</h2>
                  </span>
                </td>
                <td className='capitalize whitespace-nowrap'>
                  <span className={`px-2 py-1 text-sm ${getRoleClasses(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td className='capitalize whitespace-nowrap'>
                  <span className={`px-2 py-1 text-sm ${getStatusClasses(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className='text-sm font-extralight'>
                  <span className='text-sm font-light p-2'>{user.lastlogin}</span>
                </td>
                <td>
                  <button className="capitalize mr-3 text-primary-500 text-sm font-bold">
                    Edit
                  </button>
                  <button className="capitalize text-red-600 text-sm font-bold">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;