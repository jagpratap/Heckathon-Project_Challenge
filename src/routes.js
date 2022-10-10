import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./layouts";

import Home from "./pages/home";

const routes = [
  {
    key: "HOME",
    path: "/home",
    exact: true,
    component: Home,
  },
];

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        {routes.map(({
          component: Component,
          ...props
        }) => (
          <Route {...props} element={<Component />} />
        ))}
        <Route path="/" exact element={<Navigate to="/home" />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
