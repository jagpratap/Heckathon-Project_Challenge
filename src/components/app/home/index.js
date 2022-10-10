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
  </main>
);

export default Home;
