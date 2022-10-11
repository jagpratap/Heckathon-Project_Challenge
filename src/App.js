import { StrictMode, useEffect } from "react";
import { useUserContext } from "./context/userContext";
import "./global.scss";
import Routes from "./routes";
import data from "./services/data";

const App = () => {
  const { setChallenges } = useUserContext();
  useEffect(() => {
    setChallenges(data);
  }, []);
  return (
    <StrictMode>
      <Routes />
    </StrictMode>
  );
};

export default App;
