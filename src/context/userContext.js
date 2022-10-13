import {
  createContext,
  useState,
  useContext,
  useMemo,
} from "react";

export const UserContext = createContext({
  challenges: [],
});

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

export const useUserContext = () => useContext(UserContext);
