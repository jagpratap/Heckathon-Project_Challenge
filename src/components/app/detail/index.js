/* eslint-disable no-unused-vars */
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";
import { useUserContext } from "../../../context/userContext";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { challenges, setChallenges } = useUserContext();
  const {
    id, startDate, title, description, level,
  } = location.state;
  const onDeleteHandler = () => {
    let localData = JSON.parse(localStorage.getItem("challengeList"));
    localData = localData.filter((item) => item.id !== id);
    localStorage.setItem("challengeList", JSON.stringify([...localData]));
    const challengesTemp = challenges.filter((item) => item.id !== id);
    setChallenges(challengesTemp);
    navigate("/home");
  };
  return (
    <section className="detail_section">
      <div className="section_header">
        <div className="container">
          <div className="header_content">
            <p className="start_date">
              Starts on
              {" "}
              {moment(startDate).format("Do MMM'YY, h:mm A")}
              {" "}
              (India Standard Time)
            </p>
            <h1 className="title">{title}</h1>
            <p className="desc">{description}</p>
            <p className="level">{level}</p>
          </div>
        </div>
      </div>
      <div className="section_actions">
        <div className="container">
          <div className="actions_content">
            <div className="content_left">
              <p>Overview</p>
            </div>
            <div className="content_right">
              <button
                className="action_edit"
                type="button"
                onClick={() => navigate("/form", { state: id })}
              >
                Edit
              </button>
              <button
                className="action_delete"
                type="button"
                onClick={onDeleteHandler}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section_overview">
        <div className="container">
          <div className="overview_text">
            <p>
              Butterflies are the adult flying stage of certain insects belonging to an order or group called
              Lepidoptera.
              The word &quot;Lepidoptera&quot; means &quot;scaly wings&quot; in Greek.
              This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.
            </p>
            <p>
              An agency of the Governmental Wildlife Conservation is planning to implement an
              automated system based on computer vision so that it can identify butterflies based on captured images.
              As a consultant for this project, you are responsible for developing an efficient model.
            </p>
            <p>
              Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
