import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./parts/Footer.component";
import Header from "./parts/Header.component";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
