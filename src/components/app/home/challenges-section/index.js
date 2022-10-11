import { useUserContext } from "../../../../context/userContext";

const Challenges = () => {
  const { challenges } = useUserContext();
  return (
    <>
      {/* Filter */}
      <section className="challenges_filter_section">
        <div className="container">
          <div className="section_content">
            <h1 className="title">Explore Challenges</h1>
            <form className="form">
              <div className="form_search">
                <input type="search" placeholder="Search" />
              </div>
              <div className="form_filter">
                <button type="button">Filter</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* List */}
      <section className="challenges_list_section">
        <div className="container">
          <div className="section_content">
            <div className="content_grid">
              {challenges.map(({
                id, image, tag, title, state, date, days, hours, mins,
              }) => (
                <div key={id} className="grid_card">
                  <img className="card_image" src={image} alt={title} />
                  <div className="card_text">
                    <div className={`tag tag-${tag}`}>
                      <p>{tag}</p>
                    </div>
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
      </section>
    </>
  );
};

export default Challenges;
