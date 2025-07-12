import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function AppLayout() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <br />
      <br />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
