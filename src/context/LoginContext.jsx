import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [loginUser, setLoginUser] = useState(null);

  const login = (email, password) => {
  
    const users = [
      { id: 1, email: "kezahannifa@gmail.com", password: "keza123"},
      { id: 2, email: "mporeigor@gmail.com", password: "mpore123" },
      { id: 3, email: "tetairis@gmail.com", password: "credot123"},
    ];
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setLoginUser(user);
      return true;
    }
    return false;
  };

  const logout = () => setLoginUser(null);

  return (
    <LoginContext.Provider value={{ loginUser, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  return useContext(LoginContext);
}
