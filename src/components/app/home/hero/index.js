const statistics = [
  {
    id: 1,
    logoUrl: "./assets/images/svg_icons/AI_logo.svg",
    logoAlt: "AI_logo",
    count: "100K+",
    label: "AI model submissions",
  },
  {
    id: 2,
  },
  {
    id: 3,
    logoUrl: "./assets/images/svg_icons/data_avatar.svg",
    logoAlt: "Data_Avatar",
    count: "50K+",
    label: "Data Scientists",
  },
  {
    id: 4,
  },
  {
    id: 5,
    logoUrl: "./assets/images/svg_icons/AI_robot.svg",
    logoAlt: "AI_Robot",
    count: "100+",
    label: "AI challenges hosted",
  },
];

const Hero = () => (
  <section className="hero_section">
    <div className="section_banner">
      <div className="container">
        <div className="banner_content">
          <div className="content_left">
            <div className="vertical_strip" />
            <div className="left_main">
              <h1 className="title">Accelerate Innovation with Global AI Challenges</h1>
              <p className="intro">
                AI Challenges at DPhi simulate real-world problems. It is a great place to
                put your AI/Data Science skills to test on diverse datasets allowing you
                to foster learning through competitions.
              </p>
              <button className="action" type="button">Create Challenge</button>
            </div>
          </div>
          <div className="content_right">
            <img src="./assets/images/svg_icons/hero_bg_illustration.svg" alt="Hero-Illustration" />
          </div>
        </div>
      </div>
    </div>
    <div className="section_statistics">
      <div className="container">
        <div className="statistics_content">
          {statistics.map(({
            id, logoUrl, logoAlt, count, label,
          }) => {
            if (id % 2 !== 0) {
              return (
                <div className="content_card" key={id}>
                  <img className="card_illustration" src={logoUrl} alt={logoAlt} />
                  <div className="card_stats">
                    <p className="count">{count}</p>
                    <p className="label">{label}</p>
                  </div>
                </div>
              );
            }
            return <div key={id} className="vertical_strip" />;
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
