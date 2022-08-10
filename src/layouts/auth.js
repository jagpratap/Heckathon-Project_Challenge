import PropTypes from "prop-types";

import PublicFooter from "../components/layouts/footer/publicFooter";
import PublicHeader from "../components/layouts/header/publicHeader";

const Auth = ({ children }) => (
  <div>
    <PublicHeader />
    {children}
    <PublicFooter />
  </div>
);

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth;
