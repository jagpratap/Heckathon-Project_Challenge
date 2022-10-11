const statistics = [
  {
    id: 1,
    logo: "./assets/images/svg_icons/AI_logo.svg",
    count: "100K+",
    title: "AI model submissions",
  },
  {
    id: 2,
  },
  {
    id: 3,
    logo: "./assets/images/svg_icons/data_avatar.svg",
    count: "50K+",
    title: "Data Scientists",
  },
  {
    id: 4,
  },
  {
    id: 5,
    logo: "./assets/images/svg_icons/AI_robot.svg",
    count: "100+",
    title: "AI challenges hosted",
  },
];

const features = [
  {
    id: 1,
    logo: "./assets/images/svg_icons/carbon_notebook-reference.svg",
    title: "Prove your skills",
    desc: "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
  },
  {
    id: 2,
    logo: "./assets/images/svg_icons/Vector.svg",
    title: "Learn from community",
    desc: "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
  },
  {
    id: 3,
    logo: "./assets/images/svg_icons/Robot.svg",
    title: "Challenge yourself",
    desc: "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
  },
  {
    id: 4,
    logo: "./assets/images/svg_icons/IdentificationCard.svg",
    title: "Prove your skills",
    desc: "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
  },
];

const challenges = [
  {
    id: 1,
    image: "./assets/images/card-images/card_1.png",
    tag: "Upcoming",
    title: "Data Science Bootcamp - Graded Datathon",
    state: "Starts in",
    days: "00",
    hours: "15",
    mins: "22",
  },
  {
    id: 2,
    image: "./assets/images/card-images/card_2.png",
    tag: "Upcoming",
    title: "Data Sprint 72 - Butterfly Identification",
    state: "Starts in",
    days: "00",
    hours: "12",
    mins: "34",
  },
  {
    id: 3,
    image: "./assets/images/card-images/card_3.png",
    tag: "Active",
    title: "Data Sprint 71 - Weather Recognition",
    state: "Ends in",
    days: "01",
    hours: "17",
    mins: "10",
  },
  {
    id: 4,
    image: "./assets/images/card-images/card_4.png",
    tag: "Active",
    title: "Data Sprint 70-Airline Passenger Satisfaction",
    state: "Ends in",
    days: "00",
    hours: "11",
    mins: "27",
  },
  {
    id: 5,
    image: "./assets/images/card-images/card_5.png",
    tag: "Past",
    title: "Engineering Graduates Employment Outcomes",
    state: "Ended on",
    date: "16th May'22 09:00 PM",
  },
  {
    id: 6,
    image: "./assets/images/card-images/card_6.png",
    tag: "Past",
    title: "Travel Insurance Claim Prediction",
    state: "Ended on",
    date: "16th May'22 09:00 PM",
  },
];

const Home = () => (
  <main>
    {/* Hero Section */}
    <section className="hero_section">
      <div className="container">
        <div className="section_banner">
          <div className="vertical_strip" />
          <div className="banner_content">
            <h1 className="title">Accelerate Innovation with Global AI Challenges</h1>
            <p className="desc">
              AI Challenges at DPhi simulate real-world problems. It is a great place to
              put your AI/Data Science skills to test on diverse datasets allowing you
              to foster learning through competitions.
            </p>
            <button type="button">Create Challenge</button>
          </div>
        </div>
      </div>
    </section>
    {/* Statistics Section */}
    <section className="statistics_section">
      <div className="container">
        <div className="section_content">
          {statistics.map(({
            id, logo, count, title,
          }) => {
            if (logo) {
              return (
                <div key={id} className="content_card">
                  <img className="card_image" src={logo} alt={title} />
                  <div className="card_text">
                    <p className="count">{count}</p>
                    <p className="title">{title}</p>
                  </div>
                </div>
              );
            }
            return <div className="vertical_strip" />;
          })}
        </div>
      </div>
    </section>
    {/* Features Section */}
    <section className="features_section">
      <div className="container">
        <div className="section_content">
          <h1 className="content_title">
            Why Participate in
            {" "}
            <span>AI Challenges?</span>
          </h1>
          <div className="content_grid">
            {features.map(({
              id, logo, title, desc,
            }) => (
              <div key={id} className="grid_card">
                <img className="card_image" src={logo} alt={title} />
                <p className="title">{title}</p>
                <p className="desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    {/* Challenges filter Section */}
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
    {/* Challenges list Section */}
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
  </main>
);

export default Home;
