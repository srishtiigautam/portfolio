import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./parts/Footer.part";
import Header from "./parts/Header.part";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="p-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
