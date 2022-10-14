import { useUserContext } from "../../../../context/userContext";
import Challenge from "./challenge";

const Challenges = () => {
  const { challenges } = useUserContext();
  return (
    <section className="challenges_section">
      <div className="section_header">
        <div className="container">
          <div className="header_content">
            <h1 className="title">Explore Challenges</h1>
            <div className="form_tab">
              <input className="search_bar" type="search" placeholder="Search" />
              <div className="filter_bar">
                <button className="action" type="button">Filter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_list">
        <div className="container">
          <div className="list_content">
            <div className="content_grid">
              {challenges.map((challenge) => (
                <Challenge key={challenge.id} challenge={challenge} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
