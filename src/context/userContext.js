import {
  createContext,
  useState,
  useContext,
  useMemo,
} from "react";

// 1. Create context(with default value)
export const UserContext = createContext({
  challenges: [],
});

// 2. Create Provider(Component)
const UserProvider = ({ children }) => {
  const [challenges, setChallenges] = useState([]);
  const value = useMemo(() => ({
    challenges, setChallenges,
  }), [challenges]);
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;

// 3. Rap Provider around elements in root file(app)

// 4. Create useContext hook
export const useUserContext = () => useContext(UserContext);

// 5. Consume useContext in components
