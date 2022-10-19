/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../../context/userContext";
import Challenge from "./challenge";

const filterOptions = [
  {
    id: 1,
    value: "Status",
  },
  {
    id: 2,
    value: "All",
  },
  {
    id: 3,
    value: "Active",
  },
  {
    id: 4,
    value: "Upcoming",
  },
  {
    id: 5,
    value: "Past",
  },
  {
    id: 6,
    value: "Level",
  },
  {
    id: 7,
    value: "Easy",
  },
  {
    id: 8,
    value: "Medium",
  },
  {
    id: 9,
    value: "Hard",
  },
];

const Challenges = () => {
  const navigate = useNavigate();
  const { challenges } = useUserContext();
  const [isExpanded, setExpanded] = useState(false);
  return (
    <section className="challenges_section">
      <div className="section_header">
        <div className="container">
          <div className="header_content">
            <h1 className="title">Explore Challenges</h1>
            <div className="form_tab">
              <input className="search_bar" type="search" placeholder="Search" />
              <div className="filter_bar">
                <button
                  type="button"
                  className={isExpanded ? "expand_more" : "expand_less"}
                  onClick={() => setExpanded((prev) => !prev)}
                >
                  Filter
                </button>
              </div>
              <div className={isExpanded ? "dropdown_show" : "dropdown_hide"}>
                <button
                  type="button"
                  onClick={() => setExpanded((prev) => !prev)}
                >
                  Filter
                </button>
                <div className="dropdown_menu">
                  {filterOptions.map(({ id, value }) => {
                    if (id === 1 || id === 6) {
                      return (
                        <div key={id}>
                          <div className="horizontal_break" />
                          <p>{value}</p>
                        </div>
                      );
                    }
                    return (
                      <label key={id} htmlFor={value}>
                        <input type="checkbox" id={value} name={value} />
                        <span>{value}</span>
                      </label>
                    );
                  })}
                </div>
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
                <img src="./assets/images/svg_icons/undraw_not_found.svg" alt="Not_found_illustration" />
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
