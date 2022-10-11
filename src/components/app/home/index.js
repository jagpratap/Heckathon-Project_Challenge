import Challenges from "./challenges";
import Features from "./features";
import Hero from "./hero";
import Statistics from "./statistics";

const Home = () => (
  <main>
    {/* Hero Section */}
    <Hero />
    {/* Statistics Section */}
    <Statistics />
    {/* Features Section */}
    <Features />
    {/* Challenges Section */}
    <Challenges />
  </main>
);

export default Home;
