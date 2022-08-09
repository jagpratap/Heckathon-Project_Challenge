import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";

const routes = [
  {
    key: "HOME",
    path: "/home",
    exact: true,
    Component: Home,
  },
  {
    key: "ABOUT",
    path: "/about",
    exact: true,
    Component: About,
  },
];

const Router = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({
        Component,
        ...props
      }) => (
        <Route {...props} element={<Component />} />
      ))}
    </Routes>
  </BrowserRouter>
);

export default Router;
