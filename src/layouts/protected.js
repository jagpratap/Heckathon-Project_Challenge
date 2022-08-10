import PropTypes from "prop-types";
import ProtectedHeader from "../components/layouts/header/protectedHeader";
import ProtectedFooter from "../components/layouts/footer/protectedFooter";

const Protected = ({ children }) => (
  <div>
    <ProtectedHeader />
    {children}
    <ProtectedFooter />
  </div>
);

Protected.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Protected;
