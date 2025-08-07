import { createContext, useContext, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [User, setUser] = useState([
    { email: 'john.smith@ihuza.com', username: 'John Smith', role: 'admin', status: "active", lastlogin: "2 hours ago" },
    { email: 'sarah.j@ihuza.com', username: 'Sarah Johnson', role: 'manager', status: "active", lastlogin: "5 hours ago" },
    { email: 'm,brown@ihuza.com', username: 'Michael Brown', role: 'staff', status: "active", lastlogin: "1 day ago" },
    { email: 'emily.d@ihuza.com', username: 'Emile Davis', role: 'staff', status: "inactive", lastlogin: "3 days ago" },
     { email: 'd.wilson@ihuza.com', username: 'David Wilson', role: 'staff', status: "active", lastlogin: "2 hours ago" },
    { email: 'Lisa.a@ihuza.com', username: 'Lisa Anderson', role: 'manager', status: "active", lastlogin: "5 hours ago" },
     { email: 'r.taylor@ihuza.com', username: 'Lisa Taylor', role: 'admin', status: "active", lastlogin: "2 days ago" },
    { email: 'j.miller@ihuza.com', username: 'Jennifer Miller', role: 'staff', status: "active", lastlogin: "4 hours ago" },
     { email: 'c.lee@ihuza.com', username: 'Christopher Lee', role: 'admin', status: "active", lastlogin: "1 hours ago" },
    { email: 'a.white@ihuza.com', username: 'Amanda White', role: 'staff', status: "inactive", lastlogin: "1 week ago" , }
  ]);

  return (
    <UserContext.Provider value={{ User, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");  
  }
  return context;
};