import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.component";
import Header from "./components/Header.component";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
