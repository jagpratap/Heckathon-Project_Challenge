import { Link } from "react-router-dom";
import moment from "moment";
import useCountdown from "../../../../../hooks/useCountdown";

const Challenge = ({ challenge }) => {
  const {
    id, title, image, startDate, endDate, description, level,
  } = challenge;
  const data = useCountdown(startDate, endDate);

  let state;
  if (data.state === "Upcoming") {
    state = "Starts in";
  } else if (data.state === "Active") {
    state = "Ends in";
  } else {
    state = "Ended on";
  }

  return (
    <Link
      to="/detail"
      state={{
        id, title, startDate, description, level,
      }}
    >
      <div className="grid_card">
        <img className="illustration" src={image} alt="card-illustration" />
        <div className="card_content">
          <p className={`tag tag-${data.state}`}>{data.state}</p>
          <p className="title">{title}</p>
          <p className="state">{state}</p>
          <div className="timer">
            {data.duration ? (
              <div className="countdown">
                <p>
                  {data.duration.days()}
                  <span>Days</span>
                </p>
                <span>:</span>
                <p>
                  {data.duration.hours()}
                  <span>Hours</span>
                </p>
                <span>:</span>
                <p>
                  {data.duration.minutes()}
                  <span>Mins</span>
                </p>
              </div>
            ) : (
              <p className="date">{moment(endDate).format("Do MMM'YY, h:mm A")}</p>
            )}
          </div>
          <button
            className="action"
            onClick={(event) => event.preventDefault()}
            type="button"
          >
            Participate Now

          </button>
        </div>
      </div>

    </Link>
  );
};

export default Challenge;
