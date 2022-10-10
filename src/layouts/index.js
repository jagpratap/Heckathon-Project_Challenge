import { Helmet } from "react-helmet";

import Header from "../components/layouts/header";

const Layout = ({ children }) => (
  <>
    <Helmet titleTemplate="Hackathon | %s" />
    <Header />
    {children}
  </>
);

export default Layout;
