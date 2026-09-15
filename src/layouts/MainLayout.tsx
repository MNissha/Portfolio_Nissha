import { Outlet } from "react-router-dom";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import { useSmoothScroll } from "../hooks/useSmoothScroll.js";

function MainLayout() {
  useSmoothScroll();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
