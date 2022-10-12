import { useUserContext } from "../../../../context/userContext";

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
              {challenges.map(({
                id, image, tag, title, state, date, days, hours, mins,
              }) => (
                <div key={id} className="grid_card">
                  <img className="illustration" src={image} alt={title} />
                  <div className="card_content">
                    <p className={`tag tag-${tag}`}>{tag}</p>
                    <p className="title">{title}</p>
                    <p className="state">{state}</p>
                    <div className="timer">
                      {!date ? (
                        <div className="countdown">
                          <p>
                            {days}
                            <span>Days</span>
                          </p>
                          <span>:</span>
                          <p>
                            {hours}
                            <span>Hours</span>
                          </p>
                          <span>:</span>
                          <p>
                            {mins}
                            <span>Days</span>
                          </p>
                        </div>
                      ) : (
                        <p className="date">{date}</p>
                      )}
                    </div>
                    <button className="action" type="button">Participate Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
