import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="container">
      <Link to="/home">
        <img className="header_brand" src="./assets/images/svg_icons/dphi_brand.svg" alt="Brand_logo" />
      </Link>
    </div>
  </header>
);

export default Header;
