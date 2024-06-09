import Footer from "./Footer";
import Navbar from "./Navbar";
import HeaderComponent from "@/Layouts/header/component";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
