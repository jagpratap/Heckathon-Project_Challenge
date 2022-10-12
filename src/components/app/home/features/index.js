const features = [
  {
    id: 1,
    logoUrl: "./assets/images/svg_icons/notebook_reference.svg",
    logoAlt: "Notebook",
    title: "Prove your skills",
    desc: "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
  },
  {
    id: 2,
    logoUrl: "./assets/images/svg_icons/community.svg",
    logoAlt: "Community",
    title: "Learn from community",
    desc: "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
  },
  {
    id: 3,
    logoUrl: "./assets/images/svg_icons/robot_face.svg",
    logoAlt: "Robot_Face",
    title: "Challenge yourself",
    desc: "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
  },
  {
    id: 4,
    logoUrl: "./assets/images/svg_icons/identification_card.svg",
    logoAlt: "ID_Card",
    title: "Prove your skills",
    desc: "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
  },
];

const Features = () => (
  <section className="features_section">
    <div className="container">
      <div className="section_content">
        <h1 className="content_heading">
          Why Participate in
          {" "}
          <span>AI Challenges?</span>
        </h1>
        <div className="content_grid">
          {features.map(({
            id, logoUrl, logoAlt, title, desc,
          }) => (
            <div className="grid_card" key={id}>
              <img className="illustration" src={logoUrl} alt={logoAlt} />
              <p className="title">{title}</p>
              <p className="desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Features;
