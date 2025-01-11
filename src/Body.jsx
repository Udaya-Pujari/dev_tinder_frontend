// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <Navbar />
      {/*outlet: it says that any children routes of body will render over here */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
