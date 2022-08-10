import { Helmet } from "react-helmet";

import Component from "../../components/system/auth/verifyUser";

const verifyUser = () => (
  <>
    <Helmet title="Verify User" />
    <Component />
  </>
);

export default verifyUser;
