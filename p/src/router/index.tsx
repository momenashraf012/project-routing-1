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

const isLogin = false;
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
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="Contributpage"
          element={isLogin ? <ContributePage /> : <Navigate to={"/Login"} />}
        />
        <Route
          path="Login"
          element={
            !isLogin ? <LoginPage /> : <Navigate to={"/Contributpage"} />
          }
        />
      </Route>

      <Route path="/Learn" element={<Layout />}>
        <Route index element={<Learnpage />} />

        <Route path="Thinking" element={<h1>Thinking</h1>} />
        <Route path="Installation" element={<h1>Installation</h1>} />
      </Route>
    </>
  )
);
export default router;
