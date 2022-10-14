import { useEffect } from "react";
import { useUserContext } from "./context/userContext";
import "./global.scss";
import Routes from "./routes";

const App = () => {
  const { setChallenges } = useUserContext();
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("challengeList"));
    if (!localData) {
      setChallenges([]);
    } else {
      setChallenges(localData);
    }
  }, []);
  return <Routes />;
};

export default App;
