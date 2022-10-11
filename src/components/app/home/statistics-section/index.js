import React from "react";

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

const Statistics = () => (
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
          return <div key={id} className="vertical_strip" />;
        })}
      </div>
    </div>
  </section>
);

export default Statistics;
