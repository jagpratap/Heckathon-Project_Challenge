import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../../context/userContext";
import Challenge from "./challenge";

const Challenges = () => {
  const navigate = useNavigate();
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
            {challenges.length > 0 ? (
              <div className="content_grid">
                {challenges.map((challenge) => (
                  <Challenge key={challenge.id} challenge={challenge} />
                ))}
              </div>
            ) : (
              <div className="default">
                <img src="./assets/images/png/casual-life-3d-girl-meditating.png" alt="girl-meditating" />
                <p>
                  Uh-oh.. It looks like you have not created any Challenge.
                  {" "}
                  <br />
                  {" "}
                  Create your first challenge now!
                </p>
                <button
                  className="action"
                  type="button"
                  onClick={() => navigate("/form")}
                >
                  Create Challenge
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
