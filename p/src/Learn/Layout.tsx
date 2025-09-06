import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Aside />

      <div className="p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
