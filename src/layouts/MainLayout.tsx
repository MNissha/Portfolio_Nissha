import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
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
