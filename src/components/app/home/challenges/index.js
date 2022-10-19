import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useUserContext } from "../../../../context/userContext";

import Challenge from "./challenge";

const filterDropdown = [
  {
    id: 1,
    value: "status",
  },
  {
    id: 2,
    value: "active",
  },
  {
    id: 3,
    value: "upcoming",
  },
  {
    id: 4,
    value: "past",
  },
  {
    id: 5,
    value: "level",
  },
  {
    id: 6,
    value: "easy",
  },
  {
    id: 7,
    value: "medium",
  },
  {
    id: 8,
    value: "hard",
  },
];

const stateOfChallenge = (startDate, endDate) => {
  if (moment(startDate).diff(moment()) > 0) {
    return "upcoming";
  } if (moment().diff(startDate) > 0 && moment(endDate).diff(moment()) > 0) {
    return "active";
  }
  return "past";
};

const Challenges = () => {
  const navigate = useNavigate();
  const { challenges } = useUserContext();
  const [list, setList] = useState(challenges);
  const [isExpanded, setExpanded] = useState(false);
  const [filter = [], setFilter] = useState();
  const [search = "", setSearch] = useState();
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    if (!challenges.length) return;
    setList(challenges);
  }, [challenges]);

  const onFilterSelect = ({ array, searchValue, filterTags }) => {
    const filteredList = array.filter((keys) => {
      const {
        title,
        startDate,
        endDate,
        level,
      } = keys;
      const filterFlag = stateOfChallenge(startDate, endDate);

      let CONDITION_ONE = filterTags.includes(filterFlag); // DYNAMIC - STATUS
      let CONDITION_TWO = filterTags.includes(level); // DYNAMIC - LEVEL
      if (!filterTags.length) { // BY DEFAULT - TRUE
        CONDITION_ONE = true;
        CONDITION_TWO = true;
      }
      const CONDITION_THREE = title.toLowerCase().includes(searchValue.toLowerCase());
      if ((CONDITION_ONE || CONDITION_TWO) && CONDITION_THREE) return true;
      return false;
    });
    if (!filteredList.length) setEmpty(true);
    setList(filteredList);
    return filteredList;
  };

  const onChangeFilter = (value) => {
    let filterTemp = [...filter];
    if (filter.includes(value)) {
      filterTemp = filterTemp.filter((data) => data !== value);
    } else filterTemp.push(value);
    setFilter(filterTemp);
    onFilterSelect({
      array: challenges,
      searchValue: search,
      filterTags: filterTemp,
    });
  };

  const onChangeSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
    onFilterSelect({
      array: challenges,
      searchValue: value,
      filterTags: filter,
    });
  };

  return (
    <section className="challenges_section">
      <div className="section_header">
        <div className="container">
          <div className="header_content">
            <h1 className="title">Explore Challenges</h1>
            <div className="form_tab">
              <input
                className="search_bar"
                type="search"
                placeholder="Search"
                value={search}
                onChange={onChangeSearch}
              />
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
                  {filterDropdown.map(({ id, value }) => {
                    if (id === 1 || id === 5) {
                      return (
                        <div key={id}>
                          <div className="horizontal_break" />
                          <p>{value}</p>
                        </div>
                      );
                    }
                    return (
                      <label key={id} htmlFor={value}>
                        <input
                          type="checkbox"
                          id={value}
                          name={value}
                          value={value}
                          checked={filter.includes(value)}
                          onChange={() => onChangeFilter(value)}
                        />
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
            {list.length > 0 ? (
              <div className="content_grid">
                {list.map((challenge) => (
                  <Challenge key={challenge.id} challenge={challenge} />
                ))}
              </div>
            ) : (
              <div className="default">
                <img src="./assets/images/svg_icons/undraw_not_found.svg" alt="Not_found_illustration" />
                {!empty ? (
                  <div className="empty_list">
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
                ) : (
                  <p>No Records found!</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
