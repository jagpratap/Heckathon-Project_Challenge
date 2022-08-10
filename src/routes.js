import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./layouts";

const routes = [
  {
    key: "HOME",
    path: "/home",
    exact: true,
    component: lazy(() => import("./pages/home")),
  },
  {
    key: "ABOUT",
    path: "/about",
    exact: true,
    component: lazy(() => import("./pages/about")),
  },

  // AUTH ROUTES
  {
    key: "LOGIN",
    path: "/auth/login",
    exact: true,
    component: lazy(() => import("./pages/auth/login")),
  },
  {
    key: "REGISTER",
    path: "/auth/register",
    exact: true,
    component: lazy(() => import("./pages/auth/register")),
  },
  {
    key: "FORGOT-PASSWORD",
    path: "/auth/forgot-password",
    exact: true,
    component: lazy(() => import("./pages/auth/forgot-password")),
  },
  {
    key: "VERIFY-USER",
    path: "/auth/verify-user",
    exact: true,
    component: lazy(() => import("./pages/auth/verify-user")),
  },
  {
    key: "RESET-PASSWORD",
    path: "/auth/reset-password",
    exact: true,
    component: lazy(() => import("./pages/auth/reset-password")),
  },
  {
    key: "PAGE-NOT-FOUND",
    path: "/auth/page-not-found",
    exact: true,
    component: lazy(() => import("./pages/auth/page-not-found")),
  },
];

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(({
            component: Component,
            ...props
          }) => (
            <Route {...props} element={<Component />} />
          ))}

          {/* REDIRECT TO "/home" AS "/home" AND  "/" ARE SAME */}
          <Route path="/" exact element={<Navigate to="/home" />} />
          {/* PAGE NOT FOUND ROUTE */}
          <Route path="*" exact element={<Navigate to="/auth/page-not-found" />} />
        </Routes>
      </Suspense>
    </Layout>
  </BrowserRouter>
);

export default Router;
