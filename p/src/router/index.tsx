import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";

import Home from "../pages";
import About from "../pages/About";
import Contact from "../pages/Contact";
import RoutElement from "../pages/RoutElement";
import Learnpage from "../Learn";
import Layout from "../Learn/Layout";
import LoginPage from "../pages/Login";
import ContributePage from "../pages/ContributPage";
import ProductedRoute from "../Auth/ProductedRoute";
import ErrorHandler from "../components/error/ErrorHandler";
import PageNotFound from "../pages/PageNotFound";

const isLogin = true;
const useData: { email: string } | null = isLogin
  ? { email: "momen ashraf" }
  : null;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <>
            <RoutElement />
          </>
        }
        errorElement={<ErrorHandler />}
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="Contributpage"
          element={
            <ProductedRoute
              isAllowed={isLogin}
              redirectPath="/Login"
              data={useData}
            >
              <ContributePage />
            </ProductedRoute>
          }
        />
        <Route
          path="Login"
          element={
            <ProductedRoute
              isAllowed={!isLogin}
              redirectPath="/Contributpage"
              data={useData}
            >
              <LoginPage />
            </ProductedRoute>
          }
        />
      </Route>

      <Route path="/Learn" element={<Layout />}>
        <Route index element={<Learnpage />} />

        <Route path="Thinking" element={<h1>Thinking</h1>} />
        <Route path="Installation" element={<h1>Installation</h1>} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
export default router;
