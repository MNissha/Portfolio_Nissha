import { Outlet } from "react-router-dom";
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer.jsx";
import ScrollToHash from "../components/common/ScrollToHash.jsx";
import { useSmoothScroll } from "../hooks/useSmoothScroll.js";

function MainLayout() {
  useSmoothScroll();

  return (
    <>
      <Header />
      <ScrollToHash />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
