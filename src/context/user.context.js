import React from "react";
export const UserContext = React.createContext();
export default function UserProvider({ children }) {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  
  return (
    <UserContext.Provider
      value={{
        users,
        loading
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
